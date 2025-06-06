import { NextRequest, NextResponse } from 'next/server';
import { supabaseServer } from '@/lib/supabase/server';
import { randomUUID } from 'crypto';

/**
 * API route handler for CSV file uploads
 * Stores files in Supabase storage under user-specific paths
 */
export async function POST(req: NextRequest) {
  try {
    // Parse the form data from the request
    const data = await req.formData();
    const file = data.get('file') as File;
    
    // Validate that a file was provided
    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 });
    }
    
    // Validate file type
    if (!file.name.endsWith('.csv')) {
      return NextResponse.json({ error: 'Only CSV files are allowed' }, { status: 400 });
    }

    // Get the authenticated user's session
    const supabase = supabaseServer();
    const { data: { session } } = await supabase.auth.getSession();
    
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Generate a unique storage path including the user ID to ensure proper access control
    const userId = session.user.id;
    const fileName = file.name;
    const uniqueId = randomUUID();
    const storagePath = `${userId}/${uniqueId}-${fileName}`;

    // Upload the file to Supabase storage
    const { error: uploadError, data: uploadData } = await supabase.storage
      .from('csv')
      .upload(storagePath, file, {
        cacheControl: '3600',
        upsert: false,
      });

    if (uploadError) {
      console.error('Storage upload error:', uploadError);
      return NextResponse.json({ 
        error: 'Failed to upload file',
        details: uploadError.message 
      }, { status: 500 });
    }

    // Create a record in the files table
    const { error: dbError } = await supabase
      .from('files')
      .insert({
        user_id: userId,
        filename: fileName,
        storage_path: storagePath,
        status: 'pending',
      });

    if (dbError) {
      console.error('Database error:', dbError);
      // If we fail to create the database record, we should try to delete the uploaded file
      await supabase.storage.from('csv').remove([storagePath]);
      
      return NextResponse.json({ 
        error: 'Failed to record file metadata',
        details: dbError.message 
      }, { status: 500 });
    }

    // Return success with the file path
    return NextResponse.json({ 
      success: true,
      path: storagePath,
      message: 'File uploaded successfully'
    });
    
  } catch (error: any) {
    console.error('Upload handler error:', error);
    return NextResponse.json({ 
      error: 'Server error processing upload',
      details: error.message 
    }, { status: 500 });
  }
}

/**
 * Configure the maximum file size for uploads
 * Default Next.js limit is 4MB, we're increasing to 10MB for larger CSV files
 */
export const config = {
  api: {
    bodyParser: {
      sizeLimit: '10mb',
    },
  },
};

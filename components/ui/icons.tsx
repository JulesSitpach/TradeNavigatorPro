import React from "react";
import {
  AlertTriangle,
  ArrowDown,
  ArrowUp,
  BarChart2,
  BarChart3,
  Bell,
  Building,
  Calendar,
  Car,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  AlertCircle,
  Clock,
  Cloud,
  Copy,
  CreditCard,
  DollarSign,
  Download,
  Edit,
  ExternalLink,
  Eye,
  EyeOff,
  FileBarChart,
  FileCheck,
  FileText,
  Filter,
  Globe,
  HelpCircle,
  Info,
  LayoutDashboard,
  Loader2,
  LogOut,
  Mail,
  MapPin,
  Menu,
  Moon,
  MoreHorizontal,
  Network,
  Package,
  Percent,
  Plus,
  Route,
  Search,
  Send,
  Settings,
  Share,
  ShieldAlert,
  ShieldCheck,
  SlidersHorizontal,
  Smartphone,
  Star,
  Sun,
  Tag,
  Trash,
  Upload,
  User,
  X,
  Twitter,
  Linkedin,
  type LucideIcon,
  type LucideProps,
  Calculator,
} from "lucide-react";

// Custom logo icon
const Logo = (props: LucideProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
    data-oid="w_b7omo"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" data-oid="q5be25k" />
    <path d="M12 3l8 4.5v9l-8 4.5l-8 -4.5v-9l8 -4.5" data-oid="n2ljr_t" />
    <path d="M12 12l8 -4.5" data-oid="pb9-1e7" />
    <path d="M12 12v9" data-oid="95ge8i8" />
    <path d="M12 12l-8 -4.5" data-oid="wzdlesi" />
    <path d="M16 5.25l-8 4.5" data-oid="m755:13" />
  </svg>
);

// Custom file chart icon
const FileChart = (props: LucideProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
    data-oid="4e0-rrw"
  >
    <path
      d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"
      data-oid="zsvwlzz"
    />

    <polyline points="14 2 14 8 20 8" data-oid="2pnqqdx" />
    <path d="M8 13h2" data-oid="eunoj85" />
    <path d="M8 17h2" data-oid="3_pnyv4" />
    <path d="M14 13h2" data-oid="rp811o5" />
    <path d="M14 17h2" data-oid="ncfg7:w" />
    <path d="M10 9h4" data-oid="pd4k.23" />
  </svg>
);

// Export all icons
export const Icons = {
  logo: Logo,
  close: X,
  spinner: Loader2,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  chevronDown: ChevronDown,
  chevronUp: ChevronUp,
  trash: Trash,
  settings: Settings,
  billing: CreditCard,
  ellipsis: MoreHorizontal,
  add: Plus,
  warning: AlertTriangle,
  user: User,
  arrowUp: ArrowUp,
  arrowDown: ArrowDown,
  help: HelpCircle,
  helpCircle: HelpCircle,
  pizza: BarChart2,
  sun: Sun,
  moon: Moon,
  laptop: BarChart3,
  calendar: Calendar,
  search: Search,
  bell: Bell,
  logout: LogOut,
  externalLink: ExternalLink,
  menu: Menu,
  download: Download,
  upload: Upload,
  filter: Filter,
  check: Check,
  share: Share,
  info: Info,
  eye: Eye,
  eyeOff: EyeOff,
  mail: Mail,
  globe: Globe,
  copy: Copy,
  edit: Edit,
  send: Send,
  mapPin: MapPin,
  building: Building,
  car: Car,
  package: Package,
  smartphone: Smartphone,
  percent: Percent,
  tag: Tag,
  star: Star,
  fileCheck: FileCheck,

  // Core application icons
  calculator: Calculator,
  network: Network,
  dollarSign: DollarSign,
  clock: Clock,
  route: Route,

  // Additional application icons
  dashboard: LayoutDashboard,
  fileChart: FileChart,
  fileText: FileText,
  cloud: Cloud,

  // Alert and notification icons
  alertCircle: AlertCircle,
  alertTriangle: AlertTriangle,
  shieldAlert: ShieldAlert,
  shieldCheck: ShieldCheck,

  // Social media icons
  twitter: Twitter,
  linkedin: Linkedin,

  // Placeholder for custom icons
  custom: (icon: LucideIcon) => React.createElement(icon),
};

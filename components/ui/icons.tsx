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
  CircleAlert,
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
  Refresh,
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
    data-oid="d5wdvbo"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" data-oid="-ahuks6" />
    <path d="M12 3l8 4.5v9l-8 4.5l-8 -4.5v-9l8 -4.5" data-oid="_z87g-z" />
    <path d="M12 12l8 -4.5" data-oid="9znbapv" />
    <path d="M12 12v9" data-oid="y7gldji" />
    <path d="M12 12l-8 -4.5" data-oid="28gwd_n" />
    <path d="M16 5.25l-8 4.5" data-oid="5re.3f9" />
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
    data-oid="nlqsdru"
  >
    <path
      d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"
      data-oid="uvjc12u"
    />

    <polyline points="14 2 14 8 20 8" data-oid="4d482ab" />
    <path d="M8 13h2" data-oid="k0.-6r3" />
    <path d="M8 17h2" data-oid="erh2:89" />
    <path d="M14 13h2" data-oid="ir2dzh6" />
    <path d="M14 17h2" data-oid="jo.vdac" />
    <path d="M10 9h4" data-oid="wqz8ym9" />
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
  refresh: Refresh,
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
  alertCircle: CircleAlert,
  alertTriangle: AlertTriangle,
  shieldAlert: ShieldAlert,
  shieldCheck: ShieldCheck,

  // Placeholder for custom icons
  custom: (icon: LucideIcon) => React.createElement(icon),
};

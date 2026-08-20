import {
  ServiceItem,
  TechCategory,
  OperatingStep,
  WhyChooseItem,
  SLAItem,
  GovernanceItem,
  EngagementStep,
  ValueItem,
} from '../types';

export const COMPANY_INFO = {
  name: 'NexMonitor',
  tagline: '24×7 INFRASTRUCTURE MONITORING & INCIDENT MANAGEMENT',
  subtitle: 'NOC Operations • Infrastructure Monitoring • IT Support',
  edition: 'Company Profile | 2026',
  brandMotto: 'MONITOR. MANAGE. ASSURE.',
  email: 'Shiva.kishore@nex-monitor.com',
  salesEmail: 'sales@nex-monitor.com',
  phone: '+91 6305465482',
  phoneFormatted: '+91 63054 65482',
  website: 'https://nex-monitor.com',
  founder: 'Velpuri Venkta Shivakishore',
  hashtags: ['#NexMonitor', '#NOC', '#ManagedIT', '#Uptime'],
};

export const ABOUT_CONTENT = {
  overview:
    'NexMonitor is a technology company focused on infrastructure monitoring, NOC operations and IT support.',
  objective:
    'Our objective is to help organizations improve infrastructure visibility, identify operational issues quickly, reduce downtime and maintain business continuity through structured monitoring and incident management.',
  vision:
    "NexMonitor is establishing its operations with a focus on delivering reliable, responsive and scalable NOC services. We aim to build long-term partnerships where NexMonitor becomes a trusted extension of the client's IT operations team.",
  mission:
    'To provide reliable, responsive and cost-effective monitoring and NOC services that help organizations detect issues earlier, respond faster and maintain operational continuity.',
};

export const CORE_PILLARS = [
  {
    id: 'p1',
    label: '24×7 MONITORING',
    icon: 'Activity',
    color: 'from-cyan-500 to-blue-600',
    desc: 'Round-the-clock proactive infrastructure health observation and metric tracking.',
  },
  {
    id: 'p2',
    label: 'ALERT MANAGEMENT',
    icon: 'BellRing',
    color: 'from-blue-500 to-indigo-600',
    desc: 'Rapid alert acknowledgement, noise reduction, validation, and ticket routing.',
  },
  {
    id: 'p3',
    label: 'PERFORMANCE MONITORING',
    icon: 'Gauge',
    color: 'from-sky-500 to-cyan-600',
    desc: 'Real-time telemetry, threshold analysis, and service availability assurance.',
  },
  {
    id: 'p4',
    label: 'INCIDENT MANAGEMENT',
    icon: 'ShieldAlert',
    color: 'from-emerald-500 to-green-600',
    desc: 'Initial triage, escalation matrix routing, bridge coordination, and RCA tracking.',
  },
  {
    id: 'p5',
    label: 'RELIABLE & SECURE',
    icon: 'Lock',
    color: 'from-lime-500 to-emerald-600',
    desc: 'Robust tool-agnostic integration with zero-compromise security and SOP alignment.',
  },
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'srv-1',
    title: '24×7×365 Infrastructure Monitoring',
    category: 'core',
    description:
      'Continuous, round-the-clock observation of multi-cloud, on-premises, and hybrid IT ecosystems to catch anomalies before they impact end users.',
    iconName: 'Clock',
    deliverables: ['Real-time dashboarding', 'Threshold surveillance', 'Zero-blindspot coverage'],
  },
  {
    id: 'srv-2',
    title: 'Network & Server Monitoring',
    category: 'core',
    description:
      'In-depth monitoring of bare-metal servers, hypervisors, VMs, switches, routers, firewalls, load balancers, and bandwidth utilization.',
    iconName: 'Server',
    deliverables: ['CPU/Memory/Disk telemetry', 'Interface traffic metrics', 'SNMP/ICMP status'],
  },
  {
    id: 'srv-3',
    title: 'Application & Service Availability Monitoring',
    category: 'core',
    description:
      'Synthetic transactions, endpoint pinging, database connectivity, and HTTP/API status checks to guarantee critical application uptime.',
    iconName: 'Layers',
    deliverables: ['Endpoint health pings', 'Service response time', 'API status verification'],
  },
  {
    id: 'srv-4',
    title: 'Alert Acknowledgement & Validation',
    category: 'incident',
    description:
      'Immediate alert intake with strict noise filtration, false-positive elimination, and verification against active monitoring telemetry.',
    iconName: 'CheckCircle2',
    deliverables: ['≤5 min P1 intake', 'False-positive filtering', 'Contextual validation'],
  },
  {
    id: 'srv-5',
    title: 'Initial Incident Triage & Troubleshooting',
    category: 'incident',
    description:
      'Rapid first-level diagnostic execution following approved standard operating procedures (SOPs) and predefined runbooks to quickly isolate faults.',
    iconName: 'Wrench',
    deliverables: ['Runbook diagnostics', 'Log capture', 'Service restart protocols'],
  },
  {
    id: 'srv-6',
    title: 'Incident Creation, Tracking & Escalation',
    category: 'incident',
    description:
      'Comprehensive ticket generation in client ITSM, priority assignment, status synchronization, and structured escalation along matrix tiers.',
    iconName: 'FileText',
    deliverables: ['ITSM ticket synchronization', 'Hierarchical escalation', 'Status timeline updates'],
  },
  {
    id: 'srv-7',
    title: 'Critical Incident & Bridge Coordination',
    category: 'incident',
    description:
      'Dedicated war-room / conference bridge hosting, stakeholder communications, and subject matter expert (SME) orchestration for major outages.',
    iconName: 'PhoneCall',
    deliverables: ['War room bridge moderation', 'Stakeholder notification bulletins', 'Live incident logging'],
  },
  {
    id: 'srv-8',
    title: 'Backup & Scheduled-Job Monitoring',
    category: 'operations',
    description:
      'Supervision of automated backup routines, batch cycles, ETL data pipelines, and scheduled cron jobs to detect missed executions or failures.',
    iconName: 'Database',
    deliverables: ['Backup completion validation', 'Batch pipeline checks', 'Failure alerts & retries'],
  },
  {
    id: 'srv-9',
    title: 'Maintenance-Window Monitoring',
    category: 'operations',
    description:
      'Scheduled maintenance support, alert suppression management during planned downtime, and rigorous post-change verification testing.',
    iconName: 'CalendarCheck',
    deliverables: ['Maintenance alert muting', 'Post-change checkout testing', 'Rollback alert support'],
  },
  {
    id: 'srv-10',
    title: 'Operational Reporting & KPI Tracking',
    category: 'governance',
    description:
      'Data-driven insights providing transparent metrics on uptime, MTTA, MTTR, ticket volume distribution, and SLA compliance percentages.',
    iconName: 'BarChart3',
    deliverables: ['Daily/Weekly/Monthly digests', 'SLA attainment dashboards', 'Trend analytics'],
  },
  {
    id: 'srv-11',
    title: 'RCA Support & Recurring-issue Analysis',
    category: 'governance',
    description:
      'Root Cause Analysis support, post-incident data gathering, pattern recognition on repeating alerts, and preventive remediation recommendations.',
    iconName: 'SearchCode',
    deliverables: ['Post-mortem timeline compilation', 'Alert frequency heatmaps', 'Remediation advice'],
  },
  {
    id: 'srv-12',
    title: 'Monitoring Health & Coverage Management',
    category: 'operations',
    description:
      'Continuous audit of monitoring agents, collector nodes, stale configuration cleanup, and onboarding newly provisioned servers into monitoring scope.',
    iconName: 'ShieldCheck',
    deliverables: ['Agent heartbeat audit', 'New asset scope onboarding', 'Threshold optimization'],
  },
];

export const TECH_EXPERIENCE: TechCategory[] = [
  {
    category: 'Monitoring & Observability',
    description: 'Enterprise monitoring, visual dashboarding, and metric collection tools.',
    items: ['Zabbix', 'SolarWinds', 'Grafana', 'Nagios', 'ManageEngine', 'Prometheus', 'SCOM'],
    icon: 'Eye',
  },
  {
    category: 'Cloud & IT Operations',
    description: 'Public cloud native observability suites and enterprise ITSM systems.',
    items: ['AWS CloudWatch', 'Azure Monitor', 'ServiceNow'],
    icon: 'Cloud',
  },
  {
    category: 'Infrastructure',
    description: 'Physical, virtualized, and containerized host platforms and operating environments.',
    items: ['Windows Server', 'Linux (RHEL / Ubuntu / Debian)', 'VMware vSphere / ESXi'],
    icon: 'Cpu',
  },
  {
    category: 'Networking & Security',
    description: 'Core routing, switching, perimeter firewalls, and application delivery controllers.',
    items: ['Cisco Systems', 'Juniper Networks', 'Palo Alto Networks', 'F5 BIG-IP'],
    icon: 'Network',
  },
  {
    category: 'Protocols & Monitoring',
    description: 'Standardized network polling, diagnostic telemetry, and health inquiry protocols.',
    items: ['SNMP (v2c / v3)', 'ICMP (Ping / Trace)', 'WMI / WinRM', 'SSH Telemetry', 'Syslog'],
    icon: 'Radio',
  },
];

export const NOC_OPERATING_MODEL: OperatingStep[] = [
  {
    step: 1,
    name: 'Detect',
    summary: '24×7 real-time alert intake and anomaly ingestion from monitoring sensors.',
    actions: ['Continuous polling', 'Threshold breach alert reception', 'Telemetry ingestion'],
  },
  {
    step: 2,
    name: 'Validate',
    summary: 'Filter false alarms, verify symptom authenticity against live telemetry.',
    actions: ['Duplicate suppression', 'Heartbeat confirmation', 'Noise filtration'],
  },
  {
    step: 3,
    name: 'Prioritize',
    summary: 'Map incident severity to P1, P2, P3, or P4 based on business impact.',
    actions: ['Impact assessment', 'Urgency grading', 'SLA clock initiation'],
  },
  {
    step: 4,
    name: 'Ticket',
    summary: 'Instant ticket creation in client ITSM with formatted diagnostic context.',
    actions: ['Categorization', 'Configuration Item (CI) tagging', 'Detailed log attachment'],
  },
  {
    step: 5,
    name: 'Initial Triage',
    summary: 'Execute approved SOPs, first-level diagnostics, and safe remedial steps.',
    actions: ['Runbook execution', 'Service restart attempt', 'Diagnostic log capture'],
  },
  {
    step: 6,
    name: 'Escalate',
    summary: 'Engage designated tier-2/3 SMEs or third-party vendors via escalation matrix.',
    actions: ['Contact roster engagement', 'On-call paging', 'Escalation logging'],
  },
  {
    step: 7,
    name: 'Communicate',
    summary: 'Broadcast transparent, timely status updates across agreed channels.',
    actions: ['Email / Chat bulletins', 'Bridge moderation', 'Stakeholder briefs'],
  },
  {
    step: 8,
    name: 'Track',
    summary: 'Maintain continuous oversight of active tickets and SLA timers until resolution.',
    actions: ['Follow-up reminders', 'Status sync', 'SLA breach prevention'],
  },
  {
    step: 9,
    name: 'Resolve / Handover',
    summary: 'Confirm service restoration, validate system health, and complete shift handover.',
    actions: ['User/Service verification', 'Ticket closure', 'Shift briefing logs'],
  },
  {
    step: 10,
    name: 'RCA & Improvement',
    summary: 'Conduct post-incident review, analyze patterns, and optimize runbooks.',
    actions: ['Root cause documentation', 'Threshold tuning', 'Knowledge base update'],
  },
];

export const OPERATING_ALIGNMENT = [
  { title: 'Monitoring Tools', desc: 'Seamlessly connects to your Zabbix, SolarWinds, Grafana, PRTG, Datadog or custom setup.' },
  { title: 'ITSM Platform', desc: 'Works directly inside your ServiceNow, Jira Service Management, Zendesk, or Freshservice.' },
  { title: 'SOPs and Runbooks', desc: 'Strict execution of client-approved operational procedures and troubleshooting flows.' },
  { title: 'Escalation Matrix', desc: 'Precise multi-tier routing to your designated on-call engineers, team leads, and vendors.' },
  { title: 'Communication Channels', desc: 'Real-time alert dispatch via Slack, MS Teams, Email, SMS, or conference war rooms.' },
  { title: 'SLA Requirements', desc: 'Strict tracking tuned to your contracted uptime and response timelines.' },
  { title: 'Business-Critical Services', desc: 'Priority protection for revenue-generating workloads and core customer applications.' },
];

export const WHY_CHOOSE_LIST: WhyChooseItem[] = [
  {
    id: 1,
    title: '24×7 Monitoring & Support',
    description:
      'Proactive monitoring designed to identify and address infrastructure issues before they significantly impact business operations.',
    icon: 'Clock4',
    metric: '24×7×365',
  },
  {
    id: 2,
    title: 'Faster Incident Response',
    description:
      'Structured alert validation, prioritization and escalation to ensure critical incidents receive appropriate attention quickly.',
    icon: 'Zap',
    metric: '≤5 Min P1',
  },
  {
    id: 3,
    title: 'Flexible Engagement Models',
    description:
      "Engagement models can be tailored to the client's infrastructure, workload, operational requirements and business objectives.",
    icon: 'Sliders',
    metric: 'Tailored',
  },
  {
    id: 4,
    title: 'Tool-Agnostic Operations',
    description:
      "We can work with the client's existing monitoring and IT management ecosystem, reducing unnecessary tool changes and implementation effort.",
    icon: 'Cpu',
    metric: '0 Vendor Lock',
  },
  {
    id: 5,
    title: 'Clear SLA & Reporting',
    description:
      'Defined operational processes, SLA tracking and transparent reporting provide better visibility into NOC performance.',
    icon: 'FileCheck',
    metric: '100% Audit',
  },
  {
    id: 6,
    title: 'Cost-Effective Operations',
    description:
      'Help organizations optimize NOC operations and monitoring costs through flexible and scalable support models.',
    icon: 'TrendingDown',
    metric: 'Optimized',
  },
  {
    id: 7,
    title: 'Long-Term Partnership',
    description:
      'Our focus is on building sustainable client relationships, improving operational maturity and continuously enhancing monitoring and support processes.',
    icon: 'Handshake',
    metric: 'Extension Team',
  },
];

export const SLA_TARGETS: SLAItem[] = [
  {
    priority: 'P1',
    level: 'Critical Incident',
    target: '≤ 5 minutes',
    targetMinutes: 5,
    description: 'Complete outage of mission-critical services or core infrastructure affecting all users.',
    impact: 'Critical Business Disruption',
    example: 'Core database failure, main e-commerce portal down, primary datacenter link cut.',
  },
  {
    priority: 'P2',
    level: 'High Incident',
    target: '≤ 10 minutes',
    targetMinutes: 10,
    description: 'Major subsystem degradation or redundancy loss with significant business impact.',
    impact: 'High Impairment / Redundancy Loss',
    example: 'Secondary load balancer offline, customer payment delay, high CPU alert on cluster node.',
  },
  {
    priority: 'P3',
    level: 'Medium Incident',
    target: '≤ 20 minutes',
    targetMinutes: 20,
    description: 'Moderate issue impacting specific functions or a subset of internal users with workaround.',
    impact: 'Moderate Impact / Workaround Available',
    example: 'Internal reporting service sluggish, non-critical scheduled job delay.',
  },
  {
    priority: 'P4',
    level: 'Low Incident / Request',
    target: '≤ 30 minutes',
    targetMinutes: 30,
    description: 'Minor issue, informational threshold alert, or planned administrative inquiry.',
    impact: 'Low / Informational Notice',
    example: 'Disk capacity warning at 75%, certificate expiry notice in 30 days.',
  },
];

export const REPORTING_GOVERNANCE: GovernanceItem[] = [
  {
    cadence: 'Daily',
    badgeColor: 'border-cyan-500/40 text-cyan-400 bg-cyan-950/40',
    purpose: 'Daily operational posture, immediate critical incidents, and active shift highlights.',
    items: [
      'Critical alerts summary & acknowledgement log',
      'Major incidents timeline & impact review',
      'Open incidents & current work-in-progress status',
      'Pending escalations awaiting tier-3/vendor response',
      'Operational exceptions & maintenance notes, where required',
    ],
  },
  {
    cadence: 'Weekly',
    badgeColor: 'border-blue-500/40 text-blue-400 bg-blue-950/40',
    purpose: 'Weekly trend analysis, recurring alert patterns, and operational team performance.',
    items: [
      'Incident volume trends & category breakdown',
      'Recurring alerts & threshold tuning recommendations',
      'SLA performance & acknowledgement attainment',
      'Monitoring health & telemetry agent stability',
      'Open and aging incidents review with action items',
    ],
  },
  {
    cadence: 'Monthly',
    badgeColor: 'border-lime-500/40 text-lime-400 bg-lime-950/40',
    purpose: 'Strategic executive review, contractual SLA compliance, and continuous improvement roadmap.',
    items: [
      'Comprehensive SLA compliance & scorecard',
      'Mean Time to Acknowledge (MTTA) metrics',
      'Applicable Mean Time to Resolve (MTTR) analytics',
      'Longitudinal incident trends & capacity insights',
      'Monitoring coverage & inventory additions',
      'Recurring issues deep-dive & root cause patterns',
      'Improvement recommendations & process optimizations',
    ],
  },
];

export const ENGAGEMENT_STEPS: EngagementStep[] = [
  {
    step: 1,
    title: 'Discovery & Requirements Assessment',
    description: "Understand the client's infrastructure, business priorities and operational requirements.",
    details:
      'In-depth stakeholder workshops to map business-critical services, operational hours, team structures, and compliance expectations.',
    deliverable: 'Scope Definition & Operational Charter',
  },
  {
    step: 2,
    title: 'Infrastructure & Monitoring Assessment',
    description: 'Review infrastructure inventory, monitoring coverage, alerting requirements and existing processes.',
    details:
      'Thorough audit of servers, network nodes, cloud resources, monitoring tool configuration, threshold logic, and alert noise levels.',
    deliverable: 'Monitoring Gap Analysis & Inventory Matrix',
  },
  {
    step: 3,
    title: 'Access & Tool Integration',
    description: 'Establish required access and integrate with existing monitoring and ITSM platforms.',
    details:
      'Secure credential setup, VPN/bastion access, API token creation, ITSM webhook configuration, and notification channel linking.',
    deliverable: 'Secure Access & Integrations Validated',
  },
  {
    step: 4,
    title: 'SOP & Escalation Alignment',
    description:
      'Define and maintain SOPs, runbooks, escalation matrices, communication procedures and SLA expectations.',
    details:
      'Maintain an up-to-date server and infrastructure inventory, with server lists reviewed and updated regularly. SOPs and operational documentation are reviewed and updated regularly to reflect infrastructure changes, new services, process improvements and operational requirements.',
    deliverable: 'Approved Runbooks & Escalation Matrix',
  },
  {
    step: 5,
    title: 'Knowledge Transfer',
    description: 'Conduct knowledge transfer and establish operational documentation.',
    details:
      'Hands-on walk-throughs with client engineering teams, simulated incident runbook dry-runs, and document centralization.',
    deliverable: 'NOC Operational Readiness Signoff',
  },
  {
    step: 6,
    title: 'Pilot / Controlled Transition',
    description: 'Begin with a pilot or limited scope where appropriate before moving to full operations.',
    details:
      'Shadow monitoring phase, parallel ticket tracking, live alert triage validation, and calibration of escalation pathways.',
    deliverable: 'Pilot Phase Performance Review',
  },
  {
    step: 7,
    title: 'Steady-State Operations',
    description: 'Provide ongoing monitoring, incident management, reporting and continuous improvement.',
    details:
      '24×7×365 live NOC operations, continuous alert response, proactive inventory synchronization, and monthly governance reviews.',
    deliverable: '24×7 Active SLA Coverage & Reporting',
  },
];

export const CLIENT_VALUE: ValueItem[] = [
  {
    title: 'Improved Visibility',
    description:
      'Better visibility into infrastructure and service health through unified telemetry, real-time dashboards, and centralized alert tracking.',
    impactMetric: '360° Infrastructure Insight',
    icon: 'Eye',
  },
  {
    title: 'Faster Response',
    description:
      'Early detection and structured incident handling with rapid P1 triage in ≤ 5 minutes to mitigate service downtime.',
    impactMetric: 'Sub-5 Min Acknowledgement',
    icon: 'Zap',
  },
  {
    title: 'Reduced Operational Burden',
    description:
      'A dedicated NOC function to support internal IT teams, freeing core engineers from 24x7 alert fatigue and on-call burnout.',
    impactMetric: 'Freed Engineering Bandwidth',
    icon: 'HeartHandshake',
  },
  {
    title: 'Scalable Support',
    description:
      'Flexible operations that can grow seamlessly with the client’s expanding infrastructure and multi-cloud footprints.',
    impactMetric: 'Elastic Operational Scale',
    icon: 'TrendingUp',
  },
  {
    title: 'Better Operational Control',
    description:
      'Defined processes, updated server inventories, escalation paths, governance reporting and rigorous SLA tracking.',
    impactMetric: 'Standardized SOP Governance',
    icon: 'ShieldCheck',
  },
];

import { CloudCog, LayoutDashboard, Layers3, Workflow } from 'lucide-react';

export const services = [
  {
    slug: 'ai-solutions', title: 'AI Solutions', serviceType: 'Artificial Intelligence Solutions', icon: Workflow,
    shortDescription: 'Intelligent copilots, automations, and decision systems designed to help businesses move faster with confidence.',
    description: 'Practical AI systems that connect your knowledge, workflows, and customer experiences without adding operational complexity.',
    capabilities: ['AI copilots and assistants', 'Workflow and process automation', 'Knowledge search and retrieval', 'Analytics and decision support'],
    benefits: ['Reduce repetitive work', 'Give teams faster access to answers', 'Scale service without sacrificing quality'],
  },
  {
    slug: 'saas-development', title: 'SaaS Development', serviceType: 'SaaS Application Development', icon: Layers3,
    shortDescription: 'Scalable multi-tenant products with modern architecture, smooth user journeys, and strong platform foundations.',
    description: 'End-to-end SaaS product engineering—from product architecture and UX through secure delivery and dependable growth.',
    capabilities: ['Product discovery and architecture', 'Multi-tenant application development', 'Subscriptions and account management', 'Integrations, APIs, and analytics'],
    benefits: ['Launch with a stable foundation', 'Create a polished customer journey', 'Adapt the platform as demand grows'],
  },
  {
    slug: 'crm-erp-systems', title: 'CRM / ERP Systems', serviceType: 'CRM and ERP Software Development', icon: LayoutDashboard,
    shortDescription: 'Connected business software that brings customers, operations, finance, and reporting into one streamlined flow.',
    description: 'Purpose-built operational platforms that replace disconnected tools with clear processes, reliable data, and useful reporting.',
    capabilities: ['Customer and sales workflows', 'Operations and resource planning', 'Finance and performance reporting', 'Role-based dashboards and approvals'],
    benefits: ['Create one source of truth', 'Improve visibility across teams', 'Automate handoffs and approvals'],
  },
  {
    slug: 'cloud-platforms', title: 'Cloud Platforms', serviceType: 'Cloud Platform Development', icon: CloudCog,
    shortDescription: 'Cloud-native infrastructure and deployment systems built for reliability, security, and long-term growth.',
    description: 'Secure cloud foundations and delivery pipelines that keep modern applications available, observable, and ready to scale.',
    capabilities: ['Cloud architecture and modernization', 'Automated deployment pipelines', 'Monitoring and observability', 'Security, resilience, and optimization'],
    benefits: ['Ship updates with confidence', 'Improve reliability and recovery', 'Control infrastructure as usage grows'],
  },
];

export const getService = (slug) => services.find((service) => service.slug === slug);

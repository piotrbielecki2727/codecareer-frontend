import { AngularSVG } from '@/components/svgs';
import { AnsibleSVG, Option } from '@/components';
import { AWSSVG } from '@/components';
import { BashSVG } from '@/components';
import { CypressSVG } from '@/components';
import { DjangoSVG } from '@/components';
import { DockerSVG } from '@/components';
import { DotNetSVG } from '@/components';
import { FlaskSVG } from '@/components';
import { FlutterSVG } from '@/components';
import { GitSVG } from '@/components';
import { GoogleCloudSVG } from '@/components';
import { JestSVG } from '@/components';
import { KotlinSVG } from '@/components';
import { KubernetesSVG } from '@/components';
import { LinuxTuxSVG } from '@/components';
import { MicrosoftAzureSVG } from '@/components';
import { MicrosoftPowerBiSVG } from '@/components';
import { PythonSVG } from '@/components';
import { ReactSVG } from '@/components';
import { SAPSVG } from '@/components';
import { SeleniumSVG } from '@/components';
import { SpringSVG } from '@/components';
import { SqlDatabaseSVG } from '@/components';
import { SvelteSVG } from '@/components';
import { SwiftSVG } from '@/components';
import { TableauSVG } from '@/components';
import { TerraformSVG } from '@/components';
import { VMwareSVG } from '@/components';
import { VueSVG } from '@/components';

import { SVGIconProps } from '@/components/svgs/types';

export const technologies = (iconProps?: SVGIconProps): Option[] => [
  { label: 'Angular', value: 'angular', icon: <AngularSVG {...iconProps} /> },
  { label: 'Ansible', value: 'ansible', icon: <AnsibleSVG {...iconProps} /> },
  { label: 'AWS', value: 'aws', icon: <AWSSVG {...iconProps} /> },
  { label: 'Bash', value: 'bash', icon: <BashSVG {...iconProps} /> },
  { label: 'Cypress', value: 'cypress', icon: <CypressSVG {...iconProps} /> },
  { label: 'Django', value: 'django', icon: <DjangoSVG {...iconProps} /> },
  { label: 'Docker', value: 'docker', icon: <DockerSVG {...iconProps} /> },
  { label: '.NET', value: 'dotnet', icon: <DotNetSVG {...iconProps} /> },
  { label: 'Flask', value: 'flask', icon: <FlaskSVG {...iconProps} /> },
  { label: 'Flutter', value: 'flutter', icon: <FlutterSVG {...iconProps} /> },
  { label: 'Git', value: 'git', icon: <GitSVG {...iconProps} /> },
  {
    label: 'Google Cloud',
    value: 'gcp',
    icon: <GoogleCloudSVG {...iconProps} />,
  },
  { label: 'Jest', value: 'jest', icon: <JestSVG {...iconProps} /> },
  { label: 'Kotlin', value: 'kotlin', icon: <KotlinSVG {...iconProps} /> },
  {
    label: 'Kubernetes',
    value: 'kubernetes',
    icon: <KubernetesSVG {...iconProps} />,
  },
  { label: 'Linux', value: 'linux', icon: <LinuxTuxSVG {...iconProps} /> },
  {
    label: 'Azure',
    value: 'azure',
    icon: <MicrosoftAzureSVG {...iconProps} />,
  },
  {
    label: 'Power BI',
    value: 'powerbi',
    icon: <MicrosoftPowerBiSVG {...iconProps} />,
  },
  { label: 'Python', value: 'python', icon: <PythonSVG {...iconProps} /> },
  { label: 'React', value: 'react', icon: <ReactSVG {...iconProps} /> },
  { label: 'SAP', value: 'sap', icon: <SAPSVG {...iconProps} /> },
  {
    label: 'Selenium',
    value: 'selenium',
    icon: <SeleniumSVG {...iconProps} />,
  },
  { label: 'Spring', value: 'spring', icon: <SpringSVG {...iconProps} /> },
  { label: 'SQL', value: 'sql', icon: <SqlDatabaseSVG {...iconProps} /> },
  { label: 'Svelte', value: 'svelte', icon: <SvelteSVG {...iconProps} /> },
  { label: 'Swift', value: 'swift', icon: <SwiftSVG {...iconProps} /> },
  { label: 'Tableau', value: 'tableau', icon: <TableauSVG {...iconProps} /> },
  {
    label: 'Terraform',
    value: 'terraform',
    icon: <TerraformSVG {...iconProps} />,
  },
  { label: 'VMware', value: 'vmware', icon: <VMwareSVG {...iconProps} /> },
  { label: 'Vue.js', value: 'vue', icon: <VueSVG {...iconProps} /> },
];

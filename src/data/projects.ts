export interface Project {
  id: string;
  title: string;
  category: 'architecture' | 'interior' | 'landscape';
  year: number;
  location: string;
  description: string;
  coverImage: string;
  images: string[];
  tags: string[];
}

export const projects: Project[] = [
  {
    id: 'quannhaminh-coffe',
    title: 'Quán Nhà Mình - coffe',
    category: 'architecture',
    year: 2026,
    location: 'daklak, Vietnam',
    description:
      'A contemporary villa seamlessly blending natural materials with modern geometric forms. Expansive glass facades invite panoramic mountain views, while layered terraces echo the surrounding hillside topography.',
    coverImage: 'https://raw.githubusercontent.com/truongnhac/furniture-web/master/image/CTR1/2879869905933511043.jpg',
    images: [
      'https://raw.githubusercontent.com/truongnhac/furniture-web/master/image/CTR1/2879869905933511043.jpg',
      'https://raw.githubusercontent.com/truongnhac/furniture-web/master/image/CTR1/11110342095814865409.jpg',
      'https://raw.githubusercontent.com/truongnhac/furniture-web/master/image/CTR1/17072888032782505387.jpg',
      'https://raw.githubusercontent.com/truongnhac/furniture-web/master/image/CTR1/17762711559990407724.jpg',
      'https://raw.githubusercontent.com/truongnhac/furniture-web/master/image/CTR1/2879869905933511042.jpg',
      'https://raw.githubusercontent.com/truongnhac/furniture-web/master/image/CTR1/2975627773598080555.jpg',
      'https://raw.githubusercontent.com/truongnhac/furniture-web/master/image/CTR1/40142582337569272396.jpg',
      'https://raw.githubusercontent.com/truongnhac/furniture-web/master/image/CTR1/41354846052551624551.jpg',
      'https://raw.githubusercontent.com/truongnhac/furniture-web/master/image/CTR1/446682892585320271710.jpg',
      'https://raw.githubusercontent.com/truongnhac/furniture-web/master/image/CTR1/9247607653198219798.jpg',
    ],
    tags: ['Villa', 'Contemporary', 'Mountain'],
  },
  {
    id: 'trade-coffee',
    title: 'Trade Coffee House',
    category: 'interior',
    year: 2024,
    location: 'Ho Chi Minh City, Vietnam',
    description:
      'A warm, curated coffee-house interior inspired by artisanal craft. Raw concrete walls are softened by warm timber shelving, woven lighting fixtures and lush indoor greenery.',
    coverImage: 'https://raw.githubusercontent.com/truongnhac/furniture-web/master/image/CTR2/153821557050924683941.jpg',
    images: [
      'https://raw.githubusercontent.com/truongnhac/furniture-web/master/image/CTR2/153821557050924683941.jpg',
      'https://raw.githubusercontent.com/truongnhac/furniture-web/master/image/CTR2/257486186297481618337.jpg',
      'https://raw.githubusercontent.com/truongnhac/furniture-web/master/image/CTR2/318064661615890042139.jpg',
      'https://raw.githubusercontent.com/truongnhac/furniture-web/master/image/CTR2/335155111230990558042.jpg',
      'https://raw.githubusercontent.com/truongnhac/furniture-web/master/image/CTR2/46953337251504429840.jpg',
      'https://raw.githubusercontent.com/truongnhac/furniture-web/master/image/CTR2/70963118302473916938.jpg',
  
    ],
    tags: ['Café', 'Interior', 'Commercial'],
  },
  {
    id: 'garden-villa',
    title: 'Garden Villa',
    category: 'landscape',
    year: 2023,
    location: 'Da Lat, Vietnam',
    description:
      'A landscape design centred on a productive garden. Terraced planting beds, stone pathways and a central reflecting pool create a meditative outdoor living experience.',
    coverImage: 'https://raw.githubusercontent.com/truongnhac/furniture-web/master/image/CTR3/430651380104758283713.jpg',
    images: [
      'https://raw.githubusercontent.com/truongnhac/furniture-web/master/image/CTR3/430651380104758283713.jpg',
      'https://raw.githubusercontent.com/truongnhac/furniture-web/master/image/CTR3/126432848262681605212.jpg',
      'https://raw.githubusercontent.com/truongnhac/furniture-web/master/image/CTR3/176587282615310369535.jpg',
      'https://raw.githubusercontent.com/truongnhac/furniture-web/master/image/CTR3/1824447218780646322.jpg',
      'https://raw.githubusercontent.com/truongnhac/furniture-web/master/image/CTR3/215011143620328030024.jpg',
      'https://raw.githubusercontent.com/truongnhac/furniture-web/master/image/CTR3/215011143620328030025.jpg',
      'https://raw.githubusercontent.com/truongnhac/furniture-web/master/image/CTR3/237817841946328510526.jpg',
      'https://raw.githubusercontent.com/truongnhac/furniture-web/master/image/CTR3/256134058119274238832.jpg',
      'https://raw.githubusercontent.com/truongnhac/furniture-web/master/image/CTR3/259603060113871167814.jpg',
      'https://raw.githubusercontent.com/truongnhac/furniture-web/master/image/CTR3/259603060113871167815.jpg',
      'https://raw.githubusercontent.com/truongnhac/furniture-web/master/image/CTR3/2844298709777852417.jpg',
      'https://raw.githubusercontent.com/truongnhac/furniture-web/master/image/CTR3/2844298709777852418.jpg',
      'https://raw.githubusercontent.com/truongnhac/furniture-web/master/image/CTR3/289013613435471693711.jpg',
      'https://raw.githubusercontent.com/truongnhac/furniture-web/master/image/CTR3/326357365685126066331.jpg',
      'https://raw.githubusercontent.com/truongnhac/furniture-web/master/image/CTR3/327179957634313083227.jpg',
      'https://raw.githubusercontent.com/truongnhac/furniture-web/master/image/CTR3/329936351252182651530.jpg',
      'https://raw.githubusercontent.com/truongnhac/furniture-web/master/image/CTR3/364459823693110906634.jpg',
      'https://raw.githubusercontent.com/truongnhac/furniture-web/master/image/CTR3/408287022805515593136.jpg',
      'https://raw.githubusercontent.com/truongnhac/furniture-web/master/image/CTR3/424297017720178890929.jpg',
      'https://raw.githubusercontent.com/truongnhac/furniture-web/master/image/CTR3/438916304511808867023.jpg',
      'https://raw.githubusercontent.com/truongnhac/furniture-web/master/image/CTR3/458619780661993429916.jpg',
      'https://raw.githubusercontent.com/truongnhac/furniture-web/master/image/CTR3/46809285932229119128.jpg',
      'https://raw.githubusercontent.com/truongnhac/furniture-web/master/image/CTR3/49731822788936800220.jpg',
      'https://raw.githubusercontent.com/truongnhac/furniture-web/master/image/CTR3/49731822788936800221.jpg',
      'https://raw.githubusercontent.com/truongnhac/furniture-web/master/image/CTR3/50929572436426401433.jpg',
      'https://raw.githubusercontent.com/truongnhac/furniture-web/master/image/CTR3/59234823880241868419.jpg',
    ],
    tags: ['Garden', 'Landscape', 'Residential'],
  },
 {
    id: 'trade-offcie',
    title: 'Trade offcie House',
    category: 'interior',
    year: 2024,
    location: 'Ho Chi Minh City, Vietnam',
    description:
      'A warm, curated coffee-house interior inspired by artisanal craft. Raw concrete walls are softened by warm timber shelving, woven lighting fixtures and lush indoor greenery.',
    coverImage: 'https://raw.githubusercontent.com/truongnhac/furniture-web/master/image/CTR4/275739352854465505146.jpg',
    images: [
      'https://raw.githubusercontent.com/truongnhac/furniture-web/master/image/CTR4/275739352854465505146.jpg',
      'https://raw.githubusercontent.com/truongnhac/furniture-web/master/image/CTR4/190549784219367214343.jpg',
      'https://raw.githubusercontent.com/truongnhac/furniture-web/master/image/CTR4/216425351537355155745.jpg',
      'https://raw.githubusercontent.com/truongnhac/furniture-web/master/image/CTR4/275739352854465505147.jpg',
      'https://raw.githubusercontent.com/truongnhac/furniture-web/master/image/CTR4/311311932298884921944.jpg',
      'https://raw.githubusercontent.com/truongnhac/furniture-web/master/image/CTR4/317590402498054932150.jpg',
      'https://raw.githubusercontent.com/truongnhac/furniture-web/master/image/CTR4/370591989521465139348.jpg',
      'https://raw.githubusercontent.com/truongnhac/furniture-web/master/image/CTR4/370591989521465139349.jpg',
      'https://raw.githubusercontent.com/truongnhac/furniture-web/master/image/CTR4/370591989521465139351.jpg',
      'https://raw.githubusercontent.com/truongnhac/furniture-web/master/image/CTR4/370591989521465139352.jpg',
  
    ],
    tags: ['Café', 'Interior', 'Commercial'],
  },
];

import SectionTitle from '@/pdf/components/SectionTitle';
import PDFPageLayout from '@/pdf/components/PDFPageLayout';
import { aboutStembotixStyles } from './styles';

export const AboutStembotixPage = async data => {
  const techSkills = [
    '3D Printing & Pens',
    'Basic Electronics',
    'Arduino & IoT',
    'Drone Flying',
    'AR/VR',
    'App Design',
    'Robotics',
    'Python & Block Coding',
  ];

  const accomplishments = [
    { val: '700+', lab: 'AR-based Creche Centers (Early Childhood)' },
    { val: '600+', lab: 'Atal Tinkering Labs (ATL) Implemented' },
    { val: '100+', lab: 'Vocational Training Labs (Gujarat Govt)' },
    { val: '525+', lab: 'Innovation Clubs in Higher Education' },
    { val: '90+', lab: 'Young Scientist Innovation Clubs (UK Govt)' },
    { val: '10k+', lab: 'Hackathon Participants Across States' },
  ];

  const techBadgesHtml = techSkills
    .map(
      skill => `
      <div class="about-page__tech-badge">
        <div class="about-page__tech-text">${skill}</div>
      </div>
    `,
    )
    .join('');

  const methodologyItems = [
    'Hands-on experience & Capstone Projects',
    'VARK Model Curriculum',
    'Synchronous & Asynchronous sessions',
    'Networking with domain experts',
  ];

  const methodologyHtml = methodologyItems
    .map(
      item => `
      <div class="about-page__methodology-row">
        <div class="about-page__bullet">•</div>
        <div style="font-size:9px;color:#475569;">${item}</div>
      </div>
    `,
    )
    .join('');

  const statsHtml = accomplishments
    .map(
      stat => `
      <div class="about-page__stat-card">
        <div class="about-page__stat-value">${stat.val}</div>
        <div class="about-page__stat-label">${stat.lab}</div>
      </div>
    `,
    )
    .join('');

  const content = `
    ${aboutStembotixStyles}

    <div id="about-stembotix" class="about-page">
      ${SectionTitle({ title: 'About STEMbotix' })}

      <div class="about-page__intro-text">
        STEMbotix is committed to enhancing expertise in emerging technologies
        through STEM-based educational training. We strive to revolutionize
        education from kindergarten to post-graduation, ensuring that all
        students have the necessary knowledge, attitude, and skills to excel
        in their studies and careers. The foundation conducts STEM-based
        training programs for schools, colleges, and universities, with a
        particular focus on providing advanced technological courses to
        underprivileged children in rural India.
      </div>

      <div class="about-page__intro-text">
        Our comprehensive training covers a wide range of skills such as 3D
        pens, 3D printing, Basic Electronics, Arduino, IOT, drone flying,
        AR/VR, application design, mechanical tools, robotics, Python
        programming, and block coding.
      </div>

      <div class="about-page__intro-text">
        Our approach includes hands-on experience, Capstone Projects, the VARK
        Model Curriculum, networking opportunities with domain experts, and a
        combination of synchronous and asynchronous sessions.
      </div>

      <div class="about-page__intro-text" style="margin-bottom:0;">
        STEMbotix's remarkable journey in the realm of STEM education has been
        adorned with numerous accomplishments and substantial contributions
        towards the implementation of NEP2020 (National Education Policy
        2020), working in close collaboration with state and central
        governments. Our expertise has played a pivotal role in rolling out
        successful STEM lab projects across various regions, resulting in
        transformative educational experiences for students.
      </div>

      <div class="about-page__sub-header">Core Technologies & Training</div>
      <div class="about-page__grid-container">
        ${techBadgesHtml}
      </div>

      <div class="about-page__sub-header">Our Methodology</div>
      <div>
        ${methodologyHtml}
      </div>

      <div class="about-page__sub-header">Impact & Achievements</div>
      <div class="about-page__stats-grid">
        ${statsHtml}
      </div>

      <div class="about-page__signature-section">
        <div class="about-page__signature-name">Dhruvil Patel</div>
        <div class="about-page__signature-title">CTO, STEMbotix</div>
      </div>
    </div>
  `;

  return await PDFPageLayout(content);
};

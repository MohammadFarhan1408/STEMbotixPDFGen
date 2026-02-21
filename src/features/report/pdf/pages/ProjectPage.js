import PDFPageLayout from '@/pdf/components/PDFPageLayout';
import { SectionTitle } from '@/pdf/components/SectionTitle';
import { projectStyles } from '../styles/projectStyles';

export const ProjectPage = async data => {
  const {
    projectTitle,
    implementingOrganization,
    partnerSponsor,
    projectDuration,
    location,
    targetBeneficiaries,
    problemStatement,
    startDate,
    endDate,
  } = data?.projectOverview || {};

  const formatDate = date =>
    date ? new Date(date).toLocaleDateString('en-GB') : '—';

  const content = `
    ${projectStyles}

    ${SectionTitle('Project Overview')}

    <div class="container">

      <!-- Title Card -->
      <div class="title-card">
        <div class="label">PROJECT TITLE</div>
        <div class="main-title">
          ${projectTitle || 'Untitled Project'}
        </div>
      </div>

      <!-- Info Grid Row 1 -->
      <div class="info-grid">
        <div class="grid-item">
          <div class="small-label">IMPLEMENTING ORGANIZATION</div>
          <div class="value-text">
            ${implementingOrganization || '—'}
          </div>
        </div>

        <div class="grid-item">
          <div class="small-label">PARTNER / SPONSOR</div>
          <div class="value-text">
            ${partnerSponsor || '—'}
          </div>
        </div>
      </div>

      <!-- Info Grid Row 2 -->
      <div class="info-grid">
        <div class="grid-item">
          <div class="small-label">LOCATION</div>
          <div class="value-text">
            ${location || '—'}
          </div>
        </div>

        <div class="grid-item">
          <div class="small-label">PROJECT DURATION</div>
          <div class="value-text">
            ${projectDuration || 0} Months
          </div>
          <div class="date-range">
            ${formatDate(startDate)} to ${formatDate(endDate)}
          </div>
        </div>
      </div>

      <!-- Target Beneficiaries -->
      <div class="full-card">
        <div class="small-label">TARGET BENEFICIARIES</div>
        <div class="value-text">
          ${
            targetBeneficiaries ||
            'Students aged 3–18 and local teaching staff.'
          }
        </div>
      </div>

      <!-- Problem Statement -->
      <div class="full-card problem-box">
        <div class="small-label problem-label">
          PROBLEM STATEMENT
        </div>
        <div class="problem-text">
          ${
            problemStatement ||
            'Limited access to modern STEM infrastructure and experiential learning environments.'
          }
        </div>
      </div>

    </div>
  `;

  return await PDFPageLayout(content);
};

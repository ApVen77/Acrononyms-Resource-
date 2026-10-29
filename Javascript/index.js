// Category content data
const categoryContent = {
  "Federal Government Agencies": {
    emoji: "🏛️",
    acronyms: [
      {
        acronym: "ATF",
        meaning: "Bureau of Alcohol, Tobacco, Firearms and Explosives",
      },
      { acronym: "CIA", meaning: "Central Intelligence Agency" },
      { acronym: "DHS", meaning: "Department of Homeland Security" },
      { acronym: "DOD", meaning: "Department of Defense" },
      { acronym: "DOE", meaning: "Department of Energy" },
      { acronym: "DOI", meaning: "Department of the Interior" },
      { acronym: "DOJ", meaning: "Department of Justice" },
      { acronym: "DOL", meaning: "Department of Labor" },
      { acronym: "DOS", meaning: "Department of State" },
      { acronym: "DOT", meaning: "Department of Transportation" },
      { acronym: "ED", meaning: "Department of Education" },
      { acronym: "EPA", meaning: "Environmental Protection Agency" },
      { acronym: "FAA", meaning: "Federal Aviation Administration" },
      { acronym: "FBI", meaning: "Federal Bureau of Investigation" },
      { acronym: "FCC", meaning: "Federal Communications Commission" },
      { acronym: "FDA", meaning: "Food and Drug Administration" },
      { acronym: "FEMA", meaning: "Federal Emergency Management Agency" },
      { acronym: "FTC", meaning: "Federal Trade Commission" },
      { acronym: "HHS", meaning: "Department of Health and Human Services" },
      {
        acronym: "HUD",
        meaning: "Department of Housing and Urban Development",
      },
      { acronym: "IRS", meaning: "Internal Revenue Service" },
      {
        acronym: "NASA",
        meaning: "National Aeronautics and Space Administration",
      },
      {
        acronym: "NHTSA",
        meaning: "National Highway Traffic Safety Administration",
      },
      { acronym: "NIH", meaning: "National Institutes of Health" },
      {
        acronym: "NIST",
        meaning: "National Institute of Standards and Technology",
      },
      {
        acronym: "NOAA",
        meaning: "National Oceanic and Atmospheric Administration",
      },
      {
        acronym: "OSHA",
        meaning: "Occupational Safety and Health Administration",
      },
      { acronym: "SBA", meaning: "Small Business Administration" },
      { acronym: "SEC", meaning: "Securities and Exchange Commission" },
      { acronym: "SSA", meaning: "Social Security Administration" },
      {
        acronym: "USCIS",
        meaning: "U.S. Citizenship and Immigration Services",
      },
      { acronym: "USDA", meaning: "U.S. Department of Agriculture" },
      { acronym: "VA", meaning: "Department of Veterans Affairs" },
    ],
  },
  "Identification & Personal Information": {
    emoji: "🆔",
    acronyms: [
      { acronym: "SSN", meaning: "Social Security Number" },
      { acronym: "ITIN", meaning: "Individual Taxpayer Identification Number" },
      { acronym: "EIN", meaning: "Employer Identification Number" },
      { acronym: "TIN", meaning: "Taxpayer Identification Number" },
      { acronym: "DOB", meaning: "Date of Birth" },
      { acronym: "DL", meaning: "Driver's License" },
      { acronym: "ID", meaning: "Identification" },
      { acronym: "PII", meaning: "Personally Identifiable Information" },
      { acronym: "POA", meaning: "Power of Attorney" },
      { acronym: "NOK", meaning: "Next of Kin" },
      { acronym: "ICE", meaning: "In Case of Emergency" },
      { acronym: "PIN", meaning: "Personal Identification Number" },
      { acronym: "OTP", meaning: "One-Time Password" },
      { acronym: "MFA", meaning: "Multi-Factor Authentication" },
      { acronym: "2FA", meaning: "Two-Factor Authentication" },
    ],
  },

  "Taxes & IRS": {
    emoji: "�",
    acronyms: [
      { acronym: "IRS", meaning: "Internal Revenue Service" },
      { acronym: "SSN", meaning: "Social Security Number" },
      { acronym: "EIN", meaning: "Employer Identification Number" },
      { acronym: "ITIN", meaning: "Individual Taxpayer Identification Number" },
      { acronym: "TIN", meaning: "Taxpayer Identification Number" },
      { acronym: "AGI", meaning: "Adjusted Gross Income" },
      { acronym: "MAGI", meaning: "Modified Adjusted Gross Income" },
      { acronym: "W-2", meaning: "Wage and Tax Statement" },
      { acronym: "W-4", meaning: "Employee's Withholding Certificate" },
      {
        acronym: "1099",
        meaning: "Information return for various types of income",
      },
      { acronym: "1040", meaning: "U.S. Individual Income Tax Return" },
      { acronym: "1040-SR", meaning: "Tax return for seniors" },
      { acronym: "1095-A", meaning: "Health Insurance Marketplace Statement" },
      { acronym: "1098", meaning: "Mortgage Interest Statement" },
      { acronym: "1098-T", meaning: "Tuition Statement" },
      { acronym: "1099-NEC", meaning: "Nonemployee Compensation" },
      { acronym: "1099-INT", meaning: "Interest Income" },
      { acronym: "1099-DIV", meaning: "Dividends and Distributions" },
      { acronym: "1099-R", meaning: "Retirement distributions" },
      { acronym: "FSA", meaning: "Flexible Spending Account" },
      { acronym: "HSA", meaning: "Health Savings Account" },
      { acronym: "IRA", meaning: "Individual Retirement Account" },
      { acronym: "Roth IRA", meaning: "Roth Individual Retirement Account" },
      { acronym: "EITC", meaning: "Earned Income Tax Credit" },
      { acronym: "CTC", meaning: "Child Tax Credit" },
      { acronym: "SALT", meaning: "State and Local Tax" },
      { acronym: "AMT", meaning: "Alternative Minimum Tax" },
      { acronym: "CPA", meaning: "Certified Public Accountant" },
      { acronym: "EFT", meaning: "Electronic Funds Transfer" },
      { acronym: "ACH", meaning: "Automated Clearing House" },
    ],
  },
  "Medical & Healthcare": {
    emoji: "🏥",
    acronyms: [
      { acronym: "BP", meaning: "Blood Pressure" },
      { acronym: "HR", meaning: "Heart Rate" },
      { acronym: "RR", meaning: "Respiratory Rate" },
      { acronym: "BMI", meaning: "Body Mass Index" },
      { acronym: "CBC", meaning: "Complete Blood Count" },
      { acronym: "CMP", meaning: "Comprehensive Metabolic Panel" },
      { acronym: "BMP", meaning: "Basic Metabolic Panel" },
      { acronym: "A1C", meaning: "Hemoglobin A1C" },
      { acronym: "ECG/EKG", meaning: "Electrocardiogram" },
      { acronym: "MRI", meaning: "Magnetic Resonance Imaging" },
      { acronym: "CT", meaning: "Computed Tomography" },
      { acronym: "PET", meaning: "Positron Emission Tomography" },
      { acronym: "X-ray", meaning: "X-ray imaging" },
      { acronym: "ER", meaning: "Emergency Room" },
      { acronym: "ED", meaning: "Emergency Department" },
      { acronym: "ICU", meaning: "Intensive Care Unit" },
      { acronym: "CCU", meaning: "Coronary Care Unit" },
      { acronym: "OR", meaning: "Operating Room" },
      { acronym: "PACU", meaning: "Post-Anesthesia Care Unit" },
      { acronym: "IV", meaning: "Intravenous" },
      { acronym: "IM", meaning: "Intramuscular" },
      { acronym: "PO", meaning: "By mouth/orally" },
      { acronym: "Rx", meaning: "Prescription" },
      { acronym: "OTC", meaning: "Over the Counter" },
      { acronym: "PRN", meaning: "As needed" },
      { acronym: "NPO", meaning: "Nothing by mouth" },
      { acronym: "CPR", meaning: "Cardiopulmonary Resuscitation" },
      { acronym: "AED", meaning: "Automated External Defibrillator" },
      { acronym: "DNR", meaning: "Do Not Resuscitate" },
      { acronym: "DNI", meaning: "Do Not Intubate" },
      { acronym: "PCP", meaning: "Primary Care Provider" },
      { acronym: "RN", meaning: "Registered Nurse" },
      { acronym: "LPN", meaning: "Licensed Practical Nurse" },
      { acronym: "CNA", meaning: "Certified Nursing Assistant" },
      { acronym: "NP", meaning: "Nurse Practitioner" },
      { acronym: "PA", meaning: "Physician Assistant" },
      { acronym: "MD", meaning: "Doctor of Medicine" },
      { acronym: "DO", meaning: "Doctor of Osteopathic Medicine" },
      { acronym: "PT", meaning: "Physical Therapy" },
      { acronym: "OT", meaning: "Occupational Therapy" },
      { acronym: "ENT", meaning: "Ear, Nose and Throat" },
      { acronym: "GI", meaning: "Gastrointestinal" },
      { acronym: "GU", meaning: "Genitourinary" },
      { acronym: "OB/GYN", meaning: "Obstetrics and Gynecology" },
      { acronym: "NICU", meaning: "Neonatal Intensive Care Unit" },
      { acronym: "PICU", meaning: "Pediatric Intensive Care Unit" },
      {
        acronym: "HIPAA",
        meaning: "Health Insurance Portability and Accountability Act",
      },
      { acronym: "HMO", meaning: "Health Maintenance Organization" },
      { acronym: "PPO", meaning: "Preferred Provider Organization" },
      { acronym: "EOB", meaning: "Explanation of Benefits" },
      { acronym: "CMS", meaning: "Centers for Medicare & Medicaid Services" },
      { acronym: "FDA", meaning: "Food and Drug Administration" },
      { acronym: "NIH", meaning: "National Institutes of Health" },
      { acronym: "CDC", meaning: "Centers for Disease Control and Prevention" },
    ],
  },
  "Infectious Diseases": {
    emoji: "🦠",
    acronyms: [
      { acronym: "ADHD", meaning: "Attention-Deficit/Hyperactivity Disorder" },
      { acronym: "ADD", meaning: "Attention Deficit Disorder" },
      { acronym: "ASD", meaning: "Autism Spectrum Disorder" },
      { acronym: "COPD", meaning: "Chronic Obstructive Pulmonary Disease" },
      { acronym: "CHF", meaning: "Congestive Heart Failure" },
      { acronym: "CAD", meaning: "Coronary Artery Disease" },
      { acronym: "AFib", meaning: "Atrial Fibrillation" },
      { acronym: "DVT", meaning: "Deep Vein Thrombosis" },
      { acronym: "PE", meaning: "Pulmonary Embolism" },
      { acronym: "UTI", meaning: "Urinary Tract Infection" },
      { acronym: "STI", meaning: "Sexually Transmitted Infection" },
      { acronym: "STD", meaning: "Sexually Transmitted Disease" },
      { acronym: "HIV", meaning: "Human Immunodeficiency Virus" },
      { acronym: "AIDS", meaning: "Acquired Immunodeficiency Syndrome" },
      { acronym: "GERD", meaning: "Gastroesophageal Reflux Disease" },
      { acronym: "IBS", meaning: "Irritable Bowel Syndrome" },
      { acronym: "IBD", meaning: "Inflammatory Bowel Disease" },
      { acronym: "CKD", meaning: "Chronic Kidney Disease" },
      { acronym: "AKI", meaning: "Acute Kidney Injury" },
      { acronym: "URI", meaning: "Upper Respiratory Infection" },
      { acronym: "RSV", meaning: "Respiratory Syncytial Virus" },
      { acronym: "COVID-19", meaning: "Coronavirus Disease 2019" },
      { acronym: "TB", meaning: "Tuberculosis" },
      { acronym: "MS", meaning: "Multiple Sclerosis" },
      { acronym: "ALS", meaning: "Amyotrophic Lateral Sclerosis" },
      { acronym: "RA", meaning: "Rheumatoid Arthritis" },
      { acronym: "OA", meaning: "Osteoarthritis" },
      { acronym: "PTSD", meaning: "Post-Traumatic Stress Disorder" },
      { acronym: "OCD", meaning: "Obsessive-Compulsive Disorder" },
      { acronym: "GAD", meaning: "Generalized Anxiety Disorder" },
      { acronym: "MDD", meaning: "Major Depressive Disorder" },
    ],
  },

  "Banking & Money": {
    emoji: "💰",
    acronyms: [
      { acronym: "ATM", meaning: "Automated Teller Machine" },
      { acronym: "ACH", meaning: "Automated Clearing House" },
      { acronym: "APY", meaning: "Annual Percentage Yield" },
      { acronym: "APR", meaning: "Annual Percentage Rate" },
      { acronym: "PIN", meaning: "Personal Identification Number" },
      { acronym: "CVV", meaning: "Card Verification Value" },
      { acronym: "POS", meaning: "Point of Sale" },
      { acronym: "P2P", meaning: "Peer-to-Peer" },
      { acronym: "FDIC", meaning: "Federal Deposit Insurance Corporation" },
      { acronym: "FICO", meaning: "Fair Isaac Corporation credit score" },
      { acronym: "IRA", meaning: "Individual Retirement Account" },
      { acronym: "401(k)", meaning: "Employer-sponsored retirement plan" },
      {
        acronym: "403(b)",
        meaning: "Retirement plan commonly used by certain nonprofits/schools",
      },
      {
        acronym: "457(b)",
        meaning: "Government/nonprofit deferred compensation plan",
      },
      { acronym: "HSA", meaning: "Health Savings Account" },
      { acronym: "FSA", meaning: "Flexible Spending Account" },
      { acronym: "CD", meaning: "Certificate of Deposit" },
      { acronym: "HYSA", meaning: "High-Yield Savings Account" },
      { acronym: "ETF", meaning: "Exchange-Traded Fund" },
      { acronym: "IPO", meaning: "Initial Public Offering" },
      { acronym: "ROI", meaning: "Return on Investment" },
      { acronym: "P&L", meaning: "Profit and Loss" },
      { acronym: "AP", meaning: "Accounts Payable" },
      { acronym: "AR", meaning: "Accounts Receivable" },
      { acronym: "EFT", meaning: "Electronic Funds Transfer" },
      { acronym: "Wire", meaning: "Electronic bank transfer" },
      { acronym: "NSF", meaning: "Non-Sufficient Funds" },
      { acronym: "overdraft", meaning: "Spending more than available balance" },
      { acronym: "Zelle", meaning: "Person-to-person payment service" },
    ],
  },
  "Credit Cards & Credit": {
    emoji: "💳",
    acronyms: [
      { acronym: "APR", meaning: "Annual Percentage Rate" },
      { acronym: "APY", meaning: "Annual Percentage Yield" },
      { acronym: "FICO", meaning: "Fair Isaac credit score" },
      { acronym: "VantageScore", meaning: "Consumer credit scoring model" },
      { acronym: "DTI", meaning: "Debt-to-Income Ratio" },
      { acronym: "CL", meaning: "Credit Limit" },
      { acronym: "CLI", meaning: "Credit Limit Increase" },
      { acronym: "BT", meaning: "Balance Transfer" },
      { acronym: "AF", meaning: "Annual Fee" },
      { acronym: "PIF", meaning: "Pay in Full" },
      { acronym: "AU", meaning: "Authorized User" },
      { acronym: "ACH", meaning: "Automated Clearing House" },
      { acronym: "CVV", meaning: "Card Verification Value" },
      { acronym: "BIN", meaning: "Bank Identification Number" },
      {
        acronym: "PCI DSS",
        meaning: "Payment Card Industry Data Security Standard",
      },
      { acronym: "FDIC", meaning: "Federal Deposit Insurance Corporation" },
      { acronym: "CRA", meaning: "Credit Reporting Agency" },
      { acronym: "CFPB", meaning: "Consumer Financial Protection Bureau" },
    ],
  },
  "Housing & Real Estate": {
    emoji: "🏠",
    acronyms: [
      { acronym: "HOA", meaning: "Homeowners Association" },
      { acronym: "MLS", meaning: "Multiple Listing Service" },
      { acronym: "FHA", meaning: "Federal Housing Administration" },
      { acronym: "VA", meaning: "Department of Veterans Affairs / VA loan" },
      { acronym: "USDA", meaning: "U.S. Department of Agriculture" },
      { acronym: "PMI", meaning: "Private Mortgage Insurance" },
      { acronym: "MIP", meaning: "Mortgage Insurance Premium" },
      { acronym: "HELOC", meaning: "Home Equity Line of Credit" },
      { acronym: "HEA", meaning: "Home Equity Agreement" },
      { acronym: "LTV", meaning: "Loan-to-Value" },
      { acronym: "DTI", meaning: "Debt-to-Income" },
      { acronym: "ARM", meaning: "Adjustable-Rate Mortgage" },
      { acronym: "FRM", meaning: "Fixed-Rate Mortgage" },
      { acronym: "REO", meaning: "Real Estate Owned" },
      { acronym: "SFH", meaning: "Single-Family Home" },
      { acronym: "MFH", meaning: "Multifamily Housing" },
      { acronym: "ADU", meaning: "Accessory Dwelling Unit" },
      { acronym: "CO", meaning: "Certificate of Occupancy" },
      { acronym: "CMA", meaning: "Comparative Market Analysis" },
      { acronym: "FSBO", meaning: "For Sale By Owner" },
      { acronym: "DOM", meaning: "Days on Market" },
      { acronym: "POA", meaning: "Power of Attorney" },
      { acronym: "APR", meaning: "Annual Percentage Rate" },
      { acronym: "PITI", meaning: "Principal, Interest, Taxes and Insurance" },
      { acronym: "BPO", meaning: "Broker Price Opinion" },
    ],
  },
  "Shopping & Retail": {
    emoji: "🛒",
    acronyms: [
      { acronym: "BOGO", meaning: "Buy One, Get One" },
      { acronym: "SKU", meaning: "Stock Keeping Unit" },
      { acronym: "UPC", meaning: "Universal Product Code" },
      { acronym: "ISBN", meaning: "International Standard Book Number" },
      { acronym: "MSRP", meaning: "Manufacturer's Suggested Retail Price" },
      { acronym: "POS", meaning: "Point of Sale" },
      { acronym: "COD", meaning: "Cash on Delivery" },
      { acronym: "RMA", meaning: "Return Merchandise Authorization" },
      { acronym: "FAQ", meaning: "Frequently Asked Questions" },
      { acronym: "ETA", meaning: "Estimated Time of Arrival" },
      { acronym: "N/A", meaning: "Not Applicable / Not Available" },
      { acronym: "OOS", meaning: "Out of Stock" },
      { acronym: "MAP", meaning: "Minimum Advertised Price" },
      { acronym: "MOQ", meaning: "Minimum Order Quantity" },
      { acronym: "B2B", meaning: "Business to Business" },
      { acronym: "B2C", meaning: "Business to Consumer" },
      { acronym: "DTC", meaning: "Direct to Consumer" },
    ],
  },
  "Shipping & Delivery": {
    emoji: "📦",
    acronyms: [
      { acronym: "USPS", meaning: "United States Postal Service" },
      { acronym: "UPS", meaning: "United Parcel Service" },
      { acronym: "DHL", meaning: "DHL logistics company" },
      { acronym: "FedEx", meaning: "Federal Express" },
      { acronym: "ETA", meaning: "Estimated Time of Arrival" },
      { acronym: "ETD", meaning: "Estimated Time of Departure" },
      { acronym: "COD", meaning: "Cash on Delivery" },
      { acronym: "PO", meaning: "Purchase Order" },
      { acronym: "SKU", meaning: "Stock Keeping Unit" },
      { acronym: "RMA", meaning: "Return Merchandise Authorization" },
      { acronym: "BOL", meaning: "Bill of Lading" },
      { acronym: "FOB", meaning: "Free On Board" },
      { acronym: "LTL", meaning: "Less Than Truckload" },
      { acronym: "FTL", meaning: "Full Truckload" },
      { acronym: "3PL", meaning: "Third-Party Logistics" },
      { acronym: "POD", meaning: "Proof of Delivery" },
      { acronym: "DC", meaning: "Distribution Center" },
      { acronym: "FC", meaning: "Fulfillment Center" },
    ],
  },
  "Organizations & Nonprofits": {
    emoji: "🏢",
    acronyms: [
      { acronym: "ACLU", meaning: "American Civil Liberties Union" },
      { acronym: "AAA", meaning: "American Automobile Association" },
      { acronym: "AMA", meaning: "American Medical Association" },
      { acronym: "AARP", meaning: "American Association of Retired Persons" },
      { acronym: "BBB", meaning: "Better Business Bureau" },
      { acronym: "CDC", meaning: "Centers for Disease Control and Prevention" },
      { acronym: "FDA", meaning: "Food and Drug Administration" },
      {
        acronym: "NAACP",
        meaning: "National Association for the Advancement of Colored People",
      },
      { acronym: "NRA", meaning: "National Rifle Association" },
      { acronym: "YMCA", meaning: "Young Men's Christian Association" },
      { acronym: "YWCA", meaning: "Young Women's Christian Association" },
      { acronym: "NPR", meaning: "National Public Radio" },
      { acronym: "PBS", meaning: "Public Broadcasting Service" },
      { acronym: "IRS", meaning: "Internal Revenue Service" },
      { acronym: "SBA", meaning: "Small Business Administration" },
      { acronym: "WHO", meaning: "World Health Organization" },
      { acronym: "UN", meaning: "United Nations" },
      { acronym: "NATO", meaning: "North Atlantic Treaty Organization" },
    ],
  },
  "Media & Entertainment": {
    emoji: "📺",
    acronyms: [
      { acronym: "TV", meaning: "Television" },
      { acronym: "TV-MA", meaning: "Television Mature Audience" },
      { acronym: "TV-14", meaning: "Television for audiences 14 and older" },
      { acronym: "TV-PG", meaning: "Television Parental Guidance" },
      { acronym: "PG", meaning: "Parental Guidance" },
      { acronym: "PG-13", meaning: "Parents Strongly Cautioned" },
      { acronym: "R", meaning: "Restricted" },
      { acronym: "NC-17", meaning: "Adults Only" },
      { acronym: "MPAA", meaning: "Motion Picture Association of America" },
      { acronym: "IMDb", meaning: "Internet Movie Database" },
      { acronym: "DVD", meaning: "Digital Versatile Disc" },
      { acronym: "Blu-ray", meaning: "High-definition optical disc format" },
      { acronym: "DVR", meaning: "Digital Video Recorder" },
      { acronym: "VOD", meaning: "Video on Demand" },
      { acronym: "OTT", meaning: "Over-the-Top" },
      { acronym: "HD", meaning: "High Definition" },
      { acronym: "UHD", meaning: "Ultra High Definition" },
      { acronym: "4K", meaning: "4K resolution" },
      { acronym: "HDR", meaning: "High Dynamic Range" },
      { acronym: "FPS", meaning: "Frames Per Second" },
    ],
  },
};

//Add a carousel of acronyms
const acronyms = [
  "WOW",
  "OMG",
  "ER",
  "ESPN",
  "DIY",
  "BTW",
  "AI",
  "FBI",
  "CNN",
  "COTESOL",
  "ADHD",
  "NGO",
  "PD",
  "BRB",
  "PB&J",
  "ASAP",
  "CU",
  "YOLO",
  "NBA",
  "USA",
  "RIP",
  "AAA",
  "NFL",
];

let currentIndex = 0;
const carouselElement = document.getElementById("carousel");

function updateCarousel() {
  if (carouselElement) {
    // Add slide-out animation
    carouselElement.classList.add("carousel-slide-out");
    carouselElement.classList.remove("carousel-slide-in");

    // Wait for slide-out to complete, then change text and slide in
    setTimeout(() => {
      carouselElement.textContent = acronyms[currentIndex];
      currentIndex = (currentIndex + 1) % acronyms.length;

      carouselElement.classList.remove("carousel-slide-out");
      carouselElement.classList.add("carousel-slide-in");
    }, 500);
  }
}

// Start carousel after 5 seconds, then update every 2.5 seconds
setTimeout(() => {
  carouselElement.textContent = acronyms[currentIndex];
  carouselElement.classList.add("carousel-slide-in");
  currentIndex = (currentIndex + 1) % acronyms.length;
  setInterval(updateCarousel, 2500);
}, 5000);

// Download page functionality
document.querySelector(".btn-primary").addEventListener("click", function (e) {
  e.preventDefault();

  // Get the current page HTML
  const htmlContent = document.documentElement.outerHTML;

  // Create a blob with the HTML content
  const blob = new Blob([htmlContent], { type: "text/html" });

  // Create a download link
  const downloadLink = document.createElement("a");
  downloadLink.href = URL.createObjectURL(blob);
  downloadLink.download = "US-American-Acronyms.html";

  // Trigger the download
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);

  // Clean up the URL object
  URL.revokeObjectURL(downloadLink.href);
});
// Add click functionality to all .coins elements
document.querySelectorAll(".coins").forEach((coin) => {
  coin.style.cursor = "pointer";
  coin.addEventListener("click", function () {
    const categoryText = this.textContent.trim();
    const modalTitle = document.getElementById("categoryModalLabel");
    const modalBody = document.getElementById("modalBody");

    // Set modal title
    modalTitle.textContent = categoryText;

    // Check if category has specific content
    if (
      categoryContent[categoryText] &&
      categoryContent[categoryText].acronyms
    ) {
      const data = categoryContent[categoryText];
      let tableHTML = `<h4>${data.emoji} ${categoryText}</h4>`;
      tableHTML += '<table class="table table-striped table-hover">';
      tableHTML +=
        "<thead><tr><th>Acronym</th><th>Full Meaning</th></tr></thead>";
      tableHTML += "<tbody>";

      data.acronyms.forEach((item) => {
        tableHTML += `<tr><td><strong>${item.acronym}</strong></td><td>${item.meaning}</td></tr>`;
      });

      tableHTML += "</tbody></table>";
      modalBody.innerHTML = tableHTML;
    } else {
      // Default placeholder content for categories without data
      modalBody.innerHTML = `
                        <p>This is the <strong>${categoryText}</strong> category.</p>
                        <p>Content for this category will be displayed here.</p>
                        <p>You can add specific information, lists, or other content for each category.</p>
                    `;
    }

    // Show the modal
    const modal = new bootstrap.Modal(document.getElementById("categoryModal"));
    modal.show();
  });
});

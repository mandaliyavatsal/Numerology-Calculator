document.getElementById('numerologyForm').addEventListener('submit', function (e) {
  e.preventDefault();

  // Get user inputs
  const name = document.getElementById('name').value.trim();
  const dob = document.getElementById('dob').value;
  const time = document.getElementById('time').value;

  // Validate inputs
  if (!name || !dob) {
    alert('Please enter your name and date of birth.');
    return;
  }

  // Calculate numerology numbers
  const lifePathNumber = calculateLifePathNumber(dob);
  const destinyNumber = calculateDestinyNumber(name);
  const soulUrgeNumber = calculateSoulUrgeNumber(name);
  const birthNumber = calculateBirthNumber(time);

  // Get insights
  const pastInsight = getPastInsight(lifePathNumber);
  const presentInsight = getPresentInsight(destinyNumber);
  const futureInsight = getFutureInsight(soulUrgeNumber);
  const marriageInsight = getMarriageInsight(lifePathNumber);
  const careerInsight = getCareerInsight(destinyNumber);
  const healthInsight = getHealthInsight(soulUrgeNumber);
  const luckyNumbers = getLuckyNumbers(lifePathNumber, destinyNumber, soulUrgeNumber);
  const luckyColors = getLuckyColors(lifePathNumber);
  const fengShuiElements = getFengShuiElements(dob, time);

  // Display results
  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = `
    <h2>Your Numerology Report</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Date of Birth:</strong> ${dob}</p>
    <p><strong>Time of Birth:</strong> ${time || 'Not provided'}</p>
    <p><strong>Life Path Number:</strong> ${lifePathNumber}</p>
    <p><strong>Destiny Number:</strong> ${destinyNumber}</p>
    <p><strong>Soul Urge Number:</strong> ${soulUrgeNumber}</p>
    <p><strong>Birth Number:</strong> ${birthNumber}</p>
    <hr>
    <h3>Past Insight</h3>
    <p>${pastInsight}</p>
    <h3>Present Insight</h3>
    <p>${presentInsight}</p>
    <h3>Future Insight</h3>
    <p>${futureInsight}</p>
    <h3>Marriage Compatibility</h3>
    <p>${marriageInsight}</p>
    <h3>Career Insights</h3>
    <p>${careerInsight}</p>
    <h3>Health Insights</h3>
    <p>${healthInsight}</p>
    <h3>Lucky Numbers</h3>
    <p>${luckyNumbers}</p>
    <h3>Lucky Colors</h3>
    <p>${luckyColors}</p>
    <h3>Feng Shui Elements</h3>
    <p>${fengShuiElements}</p>
  `;
});

// Function to calculate Life Path Number
function calculateLifePathNumber(dob) {
  const digits = dob.replace(/-/g, '');
  let sum = digits.split('').reduce((acc, digit) => acc + Number(digit), 0);
  while (sum > 9 && ![11, 22, 33].includes(sum)) {
    sum = sum.toString().split('').reduce((acc, digit) => acc + Number(digit), 0);
  }
  return sum;
}

// Function to calculate Destiny Number
function calculateDestinyNumber(name) {
  const nameDigits = name.replace(/\s+/g, '').toLowerCase().split('').map(char => {
    const charCode = char.charCodeAt(0) - 96;
    return charCode >= 1 && charCode <= 26 ? charCode : 0;
  });
  let sum = nameDigits.reduce((acc, digit) => acc + digit, 0);
  while (sum > 9 && ![11, 22, 33].includes(sum)) {
    sum = sum.toString().split('').reduce((acc, digit) => acc + Number(digit), 0);
  }
  return sum;
}

// Function to calculate Soul Urge Number
function calculateSoulUrgeNumber(name) {
  const vowels = name.replace(/\s+/g, '').toLowerCase().match(/[aeiou]/g);
  if (!vowels) return 0;
  const vowelDigits = vowels.map(char => {
    const charCode = char.charCodeAt(0) - 96;
    return charCode >= 1 && charCode <= 26 ? charCode : 0;
  });
  let sum = vowelDigits.reduce((acc, digit) => acc + digit, 0);
  while (sum > 9 && ![11, 22, 33].includes(sum)) {
    sum = sum.toString().split('').reduce((acc, digit) => acc + Number(digit), 0);
  }
  return sum;
}

// Function to calculate Birth Number (Ruling Number) based on birth time
function calculateBirthNumber(time) {
  if (!time) return 'Not available (time not provided)';
  const [hours, minutes] = time.split(':');
  const sum = Number(hours) + Number(minutes);
  return sum % 9 || 9; // Reduce to a single digit (1-9)
}

// Function to get Past Insight
function getPastInsight(lifePathNumber) {
  const pastInsights = {
    1: 'Your past was marked by independence and self-discovery. You often took the lead in situations and learned to rely on yourself.',
    2: 'In the past, you were focused on building relationships and creating harmony. You may have struggled with indecision but grew through cooperation.',
    3: 'Your past was filled with creativity and self-expression. You enjoyed socializing and exploring your artistic side.',
    4: 'You worked hard in the past, building a strong foundation for your life. Discipline and practicality were your guiding principles.',
    5: 'Your past was adventurous and dynamic. You sought freedom and new experiences, often embracing change.',
    6: 'In the past, you were nurturing and responsible, often putting others\' needs before your own. Family and community were important to you.',
    7: 'Your past was introspective and spiritual. You sought knowledge and understanding, often spending time in solitude.',
    8: 'You were ambitious and success-driven in the past. Material achievements and leadership were your focus.',
    9: 'Your past was marked by compassion and humanitarian efforts. You were idealistic and sought to make the world a better place.',
    11: 'In the past, you were highly intuitive and spiritual. You may have felt like an outsider but had a strong sense of purpose.',
    22: 'Your past was focused on building something significant. You had a vision for the future and worked tirelessly to achieve it.',
    33: 'You were a healer and teacher in the past. Your compassion and wisdom inspired others.'
  };
  return pastInsights[lifePathNumber] || 'No insight available for your past.';
}

// Function to get Present Insight
function getPresentInsight(destinyNumber) {
  const presentInsights = {
    1: 'You are currently focused on leadership and independence. It’s a time to take initiative and assert yourself.',
    2: 'Your present is about cooperation and balance. Focus on partnerships and creating harmony in your life.',
    3: 'You are in a creative and expressive phase. Embrace your talents and enjoy social connections.',
    4: 'Your present is about hard work and stability. Stay disciplined and build a solid foundation for the future.',
    5: 'You are experiencing change and freedom. Embrace new opportunities and stay adaptable.',
    6: 'Your present is focused on family and responsibility. Nurture your relationships and create a harmonious environment.',
    7: 'You are in a phase of introspection and spiritual growth. Seek knowledge and trust your intuition.',
    8: 'Your present is about success and achievement. Focus on your goals and take charge of your destiny.',
    9: 'You are in a compassionate and humanitarian phase. Use your talents to help others and make a difference.',
    11: 'Your present is highly intuitive and spiritual. Trust your inner guidance and embrace your unique path.',
    22: 'You are in a phase of building something significant. Use your practical skills to manifest your vision.',
    33: 'Your present is about healing and teaching. Share your wisdom and inspire others.'
  };
  return presentInsights[destinyNumber] || 'No insight available for your present.';
}

// Function to get Future Insight
function getFutureInsight(soulUrgeNumber) {
  const futureInsights = {
    1: 'Your future will be marked by independence and leadership. You will achieve success by taking charge of your life.',
    2: 'In the future, you will find fulfillment through partnerships and cooperation. Balance and harmony will be key.',
    3: 'Your future will be creative and joyful. Embrace your talents and share them with the world.',
    4: 'Your future will be stable and secure. Your hard work will pay off, and you will build a lasting legacy.',
    5: 'Your future will be adventurous and dynamic. Embrace change and explore new horizons.',
    6: 'In the future, you will find joy in nurturing others and creating a harmonious environment.',
    7: 'Your future will be deeply spiritual and introspective. Seek wisdom and trust your inner guidance.',
    8: 'Your future will be marked by success and achievement. Focus on your goals and manifest your dreams.',
    9: 'Your future will be compassionate and humanitarian. Use your talents to make a positive impact.',
    11: 'Your future will be highly intuitive and visionary. Trust your inner wisdom and inspire others.',
    22: 'Your future will involve building something significant. Use your practical skills to create a lasting legacy.',
    33: 'Your future will be about healing and teaching. Share your wisdom and make a difference in the world.'
  };
  return futureInsights[soulUrgeNumber] || 'No insight available for your future.';
}

// Function to get Marriage Compatibility
function getMarriageInsight(lifePathNumber) {
  const marriageInsights = {
    1: 'You are independent and need a partner who respects your freedom. Look for someone who shares your ambition.',
    2: 'You thrive in harmonious relationships. Seek a partner who values cooperation and emotional connection.',
    3: 'You are creative and expressive. A partner who appreciates your artistic side will be a great match.',
    4: 'You value stability and loyalty. Look for a partner who is dependable and shares your practical approach to life.',
    5: 'You are adventurous and need a partner who embraces change and excitement.',
    6: 'You are nurturing and family-oriented. A partner who values home and relationships will be ideal.',
    7: 'You are introspective and spiritual. Seek a partner who respects your need for solitude and intellectual connection.',
    8: 'You are ambitious and success-driven. A partner who supports your goals will be a great match.',
    9: 'You are compassionate and humanitarian. Look for a partner who shares your ideals and desire to help others.',
    11: 'You are intuitive and visionary. A partner who understands your spiritual nature will be ideal.',
    22: 'You are a master builder. Seek a partner who shares your vision for creating something significant.',
    33: 'You are a healer and teacher. A partner who values compassion and wisdom will be a great match.'
  };
  return marriageInsights[lifePathNumber] || 'No insight available for marriage compatibility.';
}

// Function to get Career Insights
function getCareerInsight(destinyNumber) {
  const careerInsights = {
    1: 'You are a natural leader. Careers in management, entrepreneurship, or any field where you can take charge will suit you.',
    2: 'You excel in cooperative environments. Careers in diplomacy, counseling, or teamwork-oriented roles are ideal.',
    3: 'You are creative and expressive. Careers in arts, writing, or entertainment will bring you fulfillment.',
    4: 'You are practical and disciplined. Careers in engineering, finance, or any structured field will suit you.',
    5: 'You thrive in dynamic environments. Careers in travel, sales, or any field that offers variety will be ideal.',
    6: 'You are nurturing and responsible. Careers in teaching, healthcare, or social work will bring you joy.',
    7: 'You are analytical and spiritual. Careers in research, science, or spirituality will suit you.',
    8: 'You are ambitious and success-driven. Careers in business, finance, or leadership roles will be ideal.',
    9: 'You are compassionate and humanitarian. Careers in charity, social work, or any field that helps others will suit you.',
    11: 'You are intuitive and visionary. Careers in spirituality, counseling, or any field that inspires others will be ideal.',
    22: 'You are a master builder. Careers in architecture, project management, or any field that involves creating something significant will suit you.',
    33: 'You are a healer and teacher. Careers in healing, teaching, or any field that involves guiding others will be ideal.'
  };
  return careerInsights[destinyNumber] || 'No insight available for career.';
}

// Function to get Health Insights
function getHealthInsight(soulUrgeNumber) {
  const healthInsights = {
    1: 'You are energetic and independent. Focus on maintaining physical activity and a balanced diet.',
    2: 'You are sensitive and emotional. Pay attention to your mental health and practice relaxation techniques.',
    3: 'You are creative and expressive. Engage in activities that stimulate your mind and body.',
    4: 'You are practical and disciplined. Maintain a structured routine for physical and mental well-being.',
    5: 'You are adventurous and dynamic. Avoid overindulgence and maintain a balanced lifestyle.',
    6: 'You are nurturing and responsible. Take care of your emotional health and avoid overburdening yourself.',
    7: 'You are introspective and spiritual. Focus on mental clarity and spiritual practices for well-being.',
    8: 'You are ambitious and success-driven. Avoid stress and maintain a healthy work-life balance.',
    9: 'You are compassionate and humanitarian. Focus on emotional and spiritual health.',
    11: 'You are intuitive and visionary. Practice mindfulness and meditation for mental clarity.',
    22: 'You are a master builder. Focus on physical strength and mental resilience.',
    33: 'You are a healer and teacher. Maintain a balanced lifestyle and focus on spiritual well-being.'
  };
  return healthInsights[soulUrgeNumber] || 'No insight available for health.';
}

// Function to get Lucky Numbers
function getLuckyNumbers(lifePathNumber, destinyNumber, soulUrgeNumber) {
  const numbers = [lifePathNumber, destinyNumber, soulUrgeNumber].filter(n => n > 0);
  return numbers.join(', ');
}

// Function to get Lucky Colors
function getLuckyColors(lifePathNumber) {
  const colors = {
    1: 'Red, Orange',
    2: 'Green, Yellow',
    3: 'Blue, Purple',
    4: 'Brown, Earth Tones',
    5: 'Silver, Gray',
    6: 'Pink, White',
    7: 'Indigo, Violet',
    8: 'Gold, Black',
    9: 'Turquoise, Magenta',
    11: 'White, Silver',
    22: 'Gold, Blue',
    33: 'Purple, White'
  };
  return colors[lifePathNumber] || 'No lucky colors available.';
}

// Function to get Feng Shui Elements
function getFengShuiElements(dob, time) {
  if (!time) return 'Not available (time not provided)';
  const year = dob.split('-')[0];
  const elementMap = {
    0: 'Metal',
    1: 'Metal',
    2: 'Water',
    3: 'Water',
    4: 'Wood',
    5: 'Wood',
    6: 'Fire',
    7: 'Fire',
    8: 'Earth',
    9: 'Earth'
  };
  const lastDigit = year.slice(-1);
  return `Your Feng Shui element is ${elementMap[lastDigit]}.`;
}
// Função para capturar os parâmetros UTM da URL
function getUTMParameters() {
  const urlParams = new URLSearchParams(window.location.search);
  const utmParams = {};

  // Lista de parâmetros UTM que desejamos capturar
  const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];

  utmKeys.forEach(key => {
    if (urlParams.has(key)) {
      utmParams[key] = urlParams.get(key);
    }
  });

  return utmParams;
}

// Função para injetar os parâmetros UTM em um campo oculto do formulário
function injectUTMToForm(formId, fieldName) {
  const form = document.getElementById(formId);
  if (!form) {
    console.warn(`Formulário com ID ${formId} não encontrado.`);
    return;
  }

  const utmParams = getUTMParameters();

  // Gera uma string concatenada com os parâmetros UTM
  const utmString = Object.keys(utmParams)
    .map(key => `${key}=${utmParams[key]}`)
    .join('&');

  // Busca o campo oculto no formulário ou cria um novo se não existir
  let utmField = form.querySelector(`input[name="${fieldName}"]`);
  if (!utmField) {
    utmField = document.createElement('input');
    utmField.type = 'hidden';
    utmField.name = fieldName;
    form.appendChild(utmField);
  }

  // Atribui os valores UTM ao campo oculto
  utmField.value = utmString;
}

// Executa a função ao carregar a página e injeta os UTMs no campo oculto do formulário
document.addEventListener('DOMContentLoaded', function () {
  injectUTMToForm('contact-form', 'utm_parameters');
});

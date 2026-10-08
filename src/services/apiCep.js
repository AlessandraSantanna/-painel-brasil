const API_CEP = "https://viacep.com.br/ws";

export async function buscarCep(cep) {
  const cepLimpo = cep.replace(/\D/g, "");

  if (cepLimpo.length !== 8) {
    throw new Error("Digite um CEP válido.");
  }

  const response = await fetch(`${API_CEP}/${cepLimpo}/json/`);

  if (!response.ok) {
    throw new Error("Não foi possível consultar o CEP.");
  }

  const data = await response.json();

  if (data.erro) {
    throw new Error("CEP não encontrado.");
  }

  return data;
}
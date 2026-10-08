const API_DDD = "https://brasilapi.com.br/api/ddd/v1";

export async function buscarDdd(ddd) {
  const dddLimpo = ddd.replace(/\D/g, "");

  if (dddLimpo.length !== 2) {
    throw new Error("Digite um DDD válido.");
  }

  const response = await fetch(`${API_DDD}/${dddLimpo}`);

  if (response.status === 404) {
    throw new Error("DDD não encontrado.");
  }

  if (!response.ok) {
    throw new Error("Não foi possível consultar o DDD.");
  }

  const data = await response.json();

  if (!data.state) {
    throw new Error("Não foi possível identificar o estado.");
  }

 return {
  ...data,
  ddd: dddLimpo,
};
}
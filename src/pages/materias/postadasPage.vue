<template>
  <q-page>
    <q-card class="q-mx-lg q-mt-md q-pa-sm bg-teste" style="height: 50px">
      <div class="row text-white">
        <q-icon class="q-pa-xs" size="sm" name="mdi-post" />
        <div class="q-pl-md" style="font-size: 25px">Materias Postadas</div>
      </div>
    </q-card>

    <q-card class="q-mx-lg q-mt-lg q-pa-sm">
      <q-table
        :grid="$q.screen.xs"
        :rows="rows"
        :columns="columns"
        row-key="name"
        :pagination="initialPagination"
      />
    </q-card>
  </q-page>
</template>

<script>
const columns = [
  {
    name: "imagem_principal",
    required: true,
    label: "",
    align: "center",
    field: (row) => row.name,
    format: (val) => `${val}`,
    sortable: false,
  },
  {
    name: "assunto",
    align: "center",
    label: "Assunto",
    field: "assunto",
    sortable: true,
  },
  { name: "usuario", label: "Usuario", field: "usuario", sortable: true },
  { name: "url", label: "URL ", field: "url" },
  { name: "tema", label: "Tema", field: "tema" },
  { name: "idioma", label: "Idioma", field: "idioma" },
  {
    name: "status",
    label: "status",
    field: "status",
    sortable: true,
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
  },
  {
    name: "action",
    label: "",
    field: "action",
    sortable: false,
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
  },
];

const rows = [
  {
    name: "imagem",
    assunto: "Melhores instituições para refinanciar seu veículo",
    usuario: "Jackeline Brazão - CLT",
    url: "https://gossipdobr.com",
    tema: "Não Informado",
    idioma: "Português",
    status: "Publicado",
  },
  {
    name: "imagem",
    assunto: "Como funciona o seguro de viagem?",
    usuario: "Paula - CLT",
    url: "https://beapp.com.br",
    tema: "Não Informado",
    idioma: "Português",
    status: "Publicado",
  },
  {
    name: "imagem",
    assunto: "Seguro viagem: Real SV",
    usuario: "Paula - CLT",
    url: "https://gossipdobr.com",
    tema: "Não Informado",
    idioma: "Português",
    status: "Publicado",
  },
  {
    name: "imagem",
    assunto: "As melhores opções de passagens para a Disney World",
    usuario: "Paula - CLT",
    url: "https://buscaapp.com.br",
    tema: "Aplicativos",
    idioma: "Português",
    status: "Publicado",
  },
  {
    name: "imagem",
    assunto: "Quais as atrações da Disney World?",
    usuario: "Paula - CLT",
    url: "https://beapp.com.br",
    tema: "Não Informado",
    idioma: "Português",
    status: "Publicado",
  },
  {
    name: "imagem",
    assunto: "Onde comer na Disney World",
    usuario: "Paula - CLT",
    url: "https://gossipdobr.com",
    tema: "Não Informado",
    idioma: "Português",
    status: "Publicado",
  },
  {
    name: "imagem",
    assunto: "Pacote Disney World: Decolar",
    usuario: "Paula - CLT",
    url: "https://gossipdobr.com",
    tema: "Aplicativos",
    idioma: "Português",
    status: "Publicado",
  },
  {
    name: "imagem",
    assunto: "Pacote Disney World: 123 Milhas",
    usuario: "Paula - CLT",
    url: "https://gossipdobr.com",
    tema: "Aplicativos",
    idioma: "Português",
    status: "Publicado",
  },
  {
    name: "imagem",
    assunto:
      "Maquiagem para balada; veja algumas sugestões para arrasar na noite",
    usuario: "Jackeline Brazão - CLT",
    url: "https://buscaapp.com.br",
    tema: "Não Informado",
    idioma: "Português",
    status: "Publicado",
  },
  {
    name: "imagem",
    assunto: "Confira quais são as marcas de maquiagem mais vendidas no Brasil",
    usuario: "Jackeline Brazão - CLT",
    url: "https://buscaapp.com.br",
    tema: "Não Informado",
    idioma: "Português",
    status: "Publicado",
  },
];

export default {
  name: "PostadasPage",

  setup() {
    return {
      columns,
      rows,
      initialPagination: {
        sortBy: "desc",
        descending: false,
        page: 1,
        rowsPerPage: 15,
      },
    };
  },
};
</script>

<template>
  <q-list>
    <!-- DASHBOOARD -->
    <q-item clickable to="/" exact>
      <q-item-section avatar>
        <q-icon name="mdi-view-dashboard" />
      </q-item-section>

      <q-item-section>
        <q-item-label>Dashboard</q-item-label>
      </q-item-section>
    </q-item>
    <!-- FIM DASHBOARD -->

    <!-- MATERIAS -->
    <q-expansion-item icon="mdi-post" label="Matérias">
      <q-item class="q-ml-md" clickable to="/materias/postadas" exact>
        <q-item-section avatar>
          <q-icon name="mdi-page-next" />
        </q-item-section>

        <q-item-section>
          <q-item-label>Postadas</q-item-label>
        </q-item-section>
      </q-item>

      <q-item class="q-ml-md" clickable to="/materias/revisar" exact>
        <q-item-section avatar>
          <q-icon name="mdi-file-find" />
        </q-item-section>

        <q-item-section>
          <q-item-label>Revisar</q-item-label>
        </q-item-section>
      </q-item>

      <q-item class="q-ml-md" clickable to="/materias/leilao" exact>
        <q-item-section avatar>
          <q-icon name="mdi-gavel" />
        </q-item-section>

        <q-item-section>
          <q-item-label>Leilão</q-item-label>
        </q-item-section>
      </q-item>

      <q-item class="q-ml-md" clickable to="/materias/categorias" exact>
        <q-item-section avatar>
          <q-icon name="mdi-format-list-text" />
        </q-item-section>

        <q-item-section>
          <q-item-label>Categorias</q-item-label>
        </q-item-section>
      </q-item>

      <q-item class="q-ml-md" clickable to="/materias/criar-demandas" exact>
        <q-item-section avatar>
          <q-icon name="mdi-room-service" />
        </q-item-section>

        <q-item-section>
          <q-item-label>Criar Demandas</q-item-label>
        </q-item-section>
      </q-item>

      <q-item class="q-ml-md" clickable to="/materias/dominios" exact>
        <q-item-section avatar>
          <q-icon name="mdi-domain" />
        </q-item-section>

        <q-item-section>
          <q-item-label>Domínios</q-item-label>
        </q-item-section>
      </q-item>
    </q-expansion-item>
    <!-- FIM MATERIAS -->

    <!-- FINANCEIRO -->
    <q-expansion-item icon="mdi-finance" label="Financeiro">
      <q-item
        class="q-ml-md"
        clickable
        to="/financeiro/pagamentos-pendentes"
        exact
      >
        <q-item-section avatar>
          <q-icon name="mdi-cash" />
        </q-item-section>

        <q-item-section>
          <q-item-label>Pagamentos Pendentes</q-item-label>
        </q-item-section>
      </q-item>

      <q-item
        class="q-ml-md"
        clickable
        to="/financeiro/pagamentos-realizados"
        exact
      >
        <q-item-section avatar>
          <q-icon name="mdi-cash-multiple" />
        </q-item-section>

        <q-item-section>
          <q-item-label>Pagamentos Realizados</q-item-label>
        </q-item-section>
      </q-item>

      <q-item
        class="q-ml-md"
        clickable
        to="/financeiro/faturamento-dominio"
        exact
      >
        <q-item-section avatar>
          <q-icon name="mdi-bank-transfer" />
        </q-item-section>

        <q-item-section>
          <q-item-label>Faturamento Domínio</q-item-label>
        </q-item-section>
      </q-item>
    </q-expansion-item>
    <!-- FIM FINANCEIRO -->

    <!-- SUPORTE -->
    <q-expansion-item icon="mdi-face-agent" label="Suporte">
      <q-item class="q-ml-md" clickable to="/suporte/meus-chamados" exact>
        <q-item-section avatar>
          <q-icon name="mdi-comment-alert" />
        </q-item-section>

        <q-item-section>
          <q-item-label>Meus Chamados</q-item-label>
        </q-item-section>
      </q-item>
    </q-expansion-item>
    <!-- FIM SUPORTE -->

    <!-- USUARIO -->
    <q-expansion-item icon="mdi-account-group" label="Usuarios">
      <q-item class="q-ml-md" clickable to="/usuarios/redatores" exact>
        <q-item-section avatar>
          <q-icon name="mdi-account-plus" />
        </q-item-section>

        <q-item-section>
          <q-item-label>Redatores</q-item-label>
        </q-item-section>
      </q-item>

      <q-item class="q-ml-md" clickable to="/usuarios/publishers" exact>
        <q-item-section avatar>
          <q-icon name="mdi-account-tie" />
        </q-item-section>

        <q-item-section>
          <q-item-label>Publishers</q-item-label>
        </q-item-section>
      </q-item>

      <q-item class="q-ml-md" clickable to="/usuarios/administradores" exact>
        <q-item-section avatar>
          <q-icon name="mdi-account-hard-hat" />
        </q-item-section>

        <q-item-section>
          <q-item-label>Administradores</q-item-label>
        </q-item-section>
      </q-item>
    </q-expansion-item>
    <!-- FIM USUARIO -->

    <!-- F.A.Q -->
    <q-expansion-item icon="mdi-frequently-asked-questions" label="F.A.Q">
      <q-item class="q-ml-md" clickable to="/faq" exact>
        <q-item-section avatar>
          <q-icon name="mdi-message-question-outline" />
        </q-item-section>

        <q-item-section>
          <q-item-label>F.A.Q</q-item-label>
        </q-item-section>
      </q-item>

      <q-item class="q-ml-md" clickable to="/faq/faq-pesquisar" exact>
        <q-item-section avatar>
          <q-icon name="mdi-comment-search" />
        </q-item-section>

        <q-item-section>
          <q-item-label>Pesquisar</q-item-label>
        </q-item-section>
      </q-item>
    </q-expansion-item>
    <!-- FIM F.A.Q -->

    <!-- VIDEOS -->
    <q-expansion-item icon="mdi-video" label="Videos">
      <q-item class="q-ml-md" clickable to="/videos/aulas-videos" exact>
        <q-item-section avatar>
          <q-icon name="mdi-google-classroom" />
        </q-item-section>

        <q-item-section>
          <q-item-label>Aulas em Vídeos</q-item-label>
        </q-item-section>
      </q-item>

      <q-item class="q-ml-md" clickable to="/videos/video-pesquisar" exact>
        <q-item-section avatar>
          <q-icon name="mdi-movie-search" />
        </q-item-section>

        <q-item-section>
          <q-item-label>Pesquisar</q-item-label>
        </q-item-section>
      </q-item>
    </q-expansion-item>
    <!-- FIM VIDEOS -->

    <!-- AVISOS -->
    <q-expansion-item icon="mdi-message-alert" label="Avisos">
      <q-item class="q-ml-md" clickable to="/avisos" exact>
        <q-item-section avatar>
          <q-icon name="mdi-comment-alert" />
        </q-item-section>

        <q-item-section>
          <q-item-label>Avisos</q-item-label>
        </q-item-section>
      </q-item>

      <q-item class="q-ml-md" clickable to="/avisos/ultimos-avisos" exact>
        <q-item-section avatar>
          <q-icon name="mdi-clock-alert" />
        </q-item-section>

        <q-item-section>
          <q-item-label>Ultimos Avisos</q-item-label>
        </q-item-section>
      </q-item>
    </q-expansion-item>
    <!-- FIM AVISOS -->
  </q-list>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "EssentialLink",
  props: {
    title: {
      type: String,
      required: true,
    },

    caption: {
      type: String,
      default: "",
    },

    route: {
      type: String,
      default: "",
    },

    icon: {
      type: String,
      default: "",
    },
  },
});
</script>

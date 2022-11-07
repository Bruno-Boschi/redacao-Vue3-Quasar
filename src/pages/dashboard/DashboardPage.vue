<template>
  <q-page>
    <div class="q-pa-lg">
      <div class="row">
        <div class="col-4 q-pr-md">
          <q-card class="bg-blue-7 text-white text-center">
            <q-card-section>
              <q-icon name="mdi-ticket-outline" size="32px" />
              <q-card-section class="text-weight-medium">
                Total de 0 Chamados
              </q-card-section>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-4 q-pr-md">
          <q-card class="bg-yellow-8 text-white text-center">
            <q-card-section>
              <q-icon name="mdi-ticket-outline" size="32px" />
              <q-card-section class="text-weight-medium">
                Total de 0 Chamados Aberto
              </q-card-section>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-4">
          <q-card class="bg-green-7 text-white text-center">
            <q-card-section>
              <q-icon name="mdi-ticket-outline" size="32px" />
              <q-card-section class="text-weight-medium">
                Total de 0 Chamados Fechados
              </q-card-section>
            </q-card-section>
          </q-card>
        </div>
      </div>

      <div class="row q-pt-lg">
        <div class="col-6">
          <q-card>
            <q-card-section class="bg-teste text-white">
              DEMANDAS
            </q-card-section>

            <q-markup-table>
              <thead>
                <tr>
                  <th class="text-left">Assunto</th>
                  <th class="text-right">Redator</th>
                  <th class="text-right">Idioma</th>
                  <th class="text-right">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="text-left">Teste</td>
                  <td class="text-right">Redacao</td>
                  <td class="text-right">Portugues</td>
                  <td class="text-right">Finalizado</td>
                </tr>
                <tr>
                  <td class="text-left">Ratrear Telefone</td>
                  <td class="text-right">paula</td>
                  <td class="text-right">Espanhol</td>
                  <td class="text-right">Aguardando</td>
                </tr>
                <tr>
                  <td class="text-left">PASEP</td>
                  <td class="text-right">Antonio</td>
                  <td class="text-right">Portuguess</td>
                  <td class="text-right">Aguardando</td>
                </tr>
                <tr>
                  <td class="text-left">Envelhecer na foto</td>
                  <td class="text-right">Paula</td>
                  <td class="text-right">Francês</td>
                  <td class="text-right">Aguardando</td>
                </tr>
                <tr>
                  <td class="text-left">Assistir futebol online</td>
                  <td class="text-right">Paula</td>
                  <td class="text-right">Francês</td>
                  <td class="text-right">Aguardando</td>
                </tr>
              </tbody>
            </q-markup-table>
          </q-card>
        </div>
        <div class="q-pl-md col-6">
          <q-card>
            <q-card-section class="bg-teste text-white">
              Ranking</q-card-section
            >

            <q-markup-table>
              <thead>
                <tr>
                  <th class="text-left">Redator</th>
                  <th class="text-right">Total Matérias</th>
                  <th class="text-right">Aguardando</th>
                  <th class="text-right">Aprovadas</th>
                  <th class="text-right">Reprovadas</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="text-left">Paula</td>
                  <td class="text-right">22</td>
                  <td class="text-right">3</td>
                  <td class="text-right">22</td>
                  <td class="text-right">0</td>
                </tr>
                <tr>
                  <td class="text-left">Redacao</td>
                  <td class="text-right">2</td>
                  <td class="text-right">5</td>
                  <td class="text-right">1</td>
                  <td class="text-right">1</td>
                </tr>
                <tr>
                  <td class="text-left">Jackeline Brazao</td>
                  <td class="text-right">15</td>
                  <td class="text-right">4</td>
                  <td class="text-right">10</td>
                  <td class="text-right">5</td>
                </tr>
                <tr>
                  <td class="text-left">Juarez</td>
                  <td class="text-right">30</td>
                  <td class="text-right">10</td>
                  <td class="text-right">15</td>
                  <td class="text-right">15</td>
                </tr>
                <tr>
                  <td class="text-left">Bruno</td>
                  <td class="text-right">1</td>
                  <td class="text-right">1</td>
                  <td class="text-right">1</td>
                  <td class="text-right">0</td>
                </tr>
              </tbody>
            </q-markup-table>
          </q-card>
        </div>
      </div>

      <div class="q-pt-md">
        <q-card>
          <q-card-section class="bg-teste text-white">
            CHAMADOS
          </q-card-section>
          <q-markup-table>
            <thead>
              <tr>
                <th class="text-left">Titulo</th>
                <th class="text-right">Data/Hora</th>
                <th class="text-right">Data Fechamento</th>
                <th class="text-right">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="text-left">Paula</td>
                <td class="text-right">22</td>
                <td class="text-right">3</td>
                <td class="text-right">22</td>
              </tr>
              <tr>
                <td class="text-left">Redacao</td>
                <td class="text-right">2</td>
                <td class="text-right">5</td>
                <td class="text-right">1</td>
              </tr>
              <tr>
                <td class="text-left">Jackeline Brazao</td>
                <td class="text-right">15</td>
                <td class="text-right">4</td>
                <td class="text-right">10</td>
              </tr>
              <tr>
                <td class="text-left">Juarez</td>
                <td class="text-right">30</td>
                <td class="text-right">10</td>
                <td class="text-right">15</td>
              </tr>
              <tr>
                <td class="text-left">Bruno</td>
                <td class="text-right">1</td>
                <td class="text-right">1</td>
                <td class="text-right">1</td>
              </tr>
            </tbody>
          </q-markup-table>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "DashBoard",
});
</script>

<style lang="sass" scoped></style>

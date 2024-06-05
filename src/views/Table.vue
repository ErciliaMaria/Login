<template>
  <v-container>
    <v-table theme="black">
      <thead>
        <tr>
          <th class="text-center">
            First Name
          </th>
          <th class="text-center">
            Last Name
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, index) in this.users"
          :key="index"
        >
          <td>{{ item.firstName }}</td>
          <td>{{ item.lastName }}</td>
        </tr>
      </tbody>
    </v-table>
    <div class="text-center">
      <v-row justify="center">
        <v-col cols="5">
          <v-container class="max-width">
            <v-pagination
              @update="fetchUsers"
              v-model="page"
              :length="pagination.length"
              next-icon="mdi-menu-right"
              prev-icon="mdi-menu-left"
            ></v-pagination>
          </v-container>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      users: [],
      pagination: [],
      page:1,
    };
  },
  computed: {
    pageCount() {
      return this.users.last_page;
    }
  },
  watch: {
    page(newPage) {
      this.fetchUsers(newPage);
    }
  },
  created() {
    this.fetchUsers(this.page);
  },
  
  methods: {
    async fetchUsers(page) {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/users?page=${page}`);
        console.log(response.data);
        this.users = response.data.data;
        this.pagination = response.data.links;
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    }
  }
};
</script>

<style scoped>
/* Adicione seu estilo aqui */
</style>
<template>
    <h2>Back-office</h2>
    <p v-if="isLoading">Chargement...</p>
    <div v-else class="forms">
        <div class="button" @click="openMenu">
            <span><svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#6C9E41"><path d="M431.33-120v-230H498v82h342v66.67H498V-120h-66.67ZM120-201.33V-268h244.67v66.67H120Zm178-164v-81.34H120v-66.66h178V-596h66.67v230.67H298Zm133.33-81.34v-66.66H840v66.66H431.33Zm164-163.33v-230H662v81.33h178V-692H662v82h-66.67ZM120-692v-66.67h408.67V-692H120Z"/></svg></span>
            <span>Menu</span>
            <span><svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#FFFFFF"><path d="M431.33-120v-230H498v82h342v66.67H498V-120h-66.67ZM120-201.33V-268h244.67v66.67H120Zm178-164v-81.34H120v-66.66h178V-596h66.67v230.67H298Zm133.33-81.34v-66.66H840v66.66H431.33Zm164-163.33v-230H662v81.33h178V-692H662v82h-66.67ZM120-692v-66.67h408.67V-692H120Z"/></svg></span>
        </div>
        <div class="select visible" :class="{hidden : isOpenMenu===false}" v-if="!isLoading && menus && menus.length>0">
            <div class="options" :class="{selectedOpt : updateMenu===i}" v-for="(menu, i) in menus" @click="menuClick(i)">
                <p>{{ menu.nom }}</p>
                <p>{{ menu.description }}</p>
                <p>{{ menu.prix/100 }}€</p>
            </div>
        </div>
        <UpdatePlat
            v-if="updateMenu!==null && menus[updateMenu]"
            :id="updateMenu"
            :nom="menus[updateMenu].nom"
            :description="menus[updateMenu].description"
            :prix="menus[updateMenu].prix"
            />
        <AjoutPlat v-if="updateMenu===null"/>
        <div class="button" @click="openPromotion">
            <span><svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#6C9E41"><path d="M431.33-120v-230H498v82h342v66.67H498V-120h-66.67ZM120-201.33V-268h244.67v66.67H120Zm178-164v-81.34H120v-66.66h178V-596h66.67v230.67H298Zm133.33-81.34v-66.66H840v66.66H431.33Zm164-163.33v-230H662v81.33h178V-692H662v82h-66.67ZM120-692v-66.67h408.67V-692H120Z"/></svg></span>
            <span>Promotions</span>
            <span><svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#FFFFFF"><path d="M431.33-120v-230H498v82h342v66.67H498V-120h-66.67ZM120-201.33V-268h244.67v66.67H120Zm178-164v-81.34H120v-66.66h178V-596h66.67v230.67H298Zm133.33-81.34v-66.66H840v66.66H431.33Zm164-163.33v-230H662v81.33h178V-692H662v82h-66.67ZM120-692v-66.67h408.67V-692H120Z"/></svg></span>
        </div>
        <div class="select visible" :class="{hidden : isOpenPromotion===false}" v-if="!isLoading && promotions && promotions.length>0">
            <div class="options" :class="{selectedOpt : updatePromotion===i}" v-for="(promotion, i) in promotions" @click="promotionClick(i)">
                <p>{{ promotion.titre }}</p>
                <p>{{ promotion.description }}</p>
            </div>
        </div>
        <UpdatePromo
            v-if="updatePromotion!==null && promotions[updatePromotion]"
            :id="updatePromotion"
            :titre="promotions[updatePromotion].titre"
            :description="promotions[updatePromotion].description"
            />
        <AjoutPromo v-if="updatePromotion===null"/>
        <div class="button" @click="openReservation">
            <span><svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#6C9E41"><path d="M431.33-120v-230H498v82h342v66.67H498V-120h-66.67ZM120-201.33V-268h244.67v66.67H120Zm178-164v-81.34H120v-66.66h178V-596h66.67v230.67H298Zm133.33-81.34v-66.66H840v66.66H431.33Zm164-163.33v-230H662v81.33h178V-692H662v82h-66.67ZM120-692v-66.67h408.67V-692H120Z"/></svg></span>
            <span>Reservations</span>
            <span><svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#FFFFFF"><path d="M431.33-120v-230H498v82h342v66.67H498V-120h-66.67ZM120-201.33V-268h244.67v66.67H120Zm178-164v-81.34H120v-66.66h178V-596h66.67v230.67H298Zm133.33-81.34v-66.66H840v66.66H431.33Zm164-163.33v-230H662v81.33h178V-692H662v82h-66.67ZM120-692v-66.67h408.67V-692H120Z"/></svg></span>
        </div>
        <div class="select visible" :class="{hidden : isOpenReservation===false}" v-if="!isLoading && reservations && reservations.length>0">
            <div class="options" :class="{selectedOpt : updateReservation===i}" v-for="(reservation, i) in reservations" @click="reservationClick(i)">
                <p>{{ reservation.telephone }}</p>
                <p>{{ reservation.date_reservation.slice(0,10) }}</p>
                <p>{{ horaires[reservation.id_jour-1]?.jour }}</p>
                <p>{{ Math.floor((reservation.heure)/100).toString().length<2?'0'+Math.floor((reservation.heure)/100).toString():Math.floor((reservation.heure)/100).toString() }}h{{ (reservation.heure-Math.floor((reservation.heure)/100)*100).toString().length<2?(reservation.heure-Math.floor((reservation.heure)/100)*100).toString()+'0':(reservation.heure-Math.floor((reservation.heure)/100)*100).toString() }}</p>
                <p>{{ reservation.nombre_personnes }} pers.</p>
            </div>
        </div>
        <UpdateReservation
            v-if="updateReservation!==null && reservations[updateReservation]"
            :id="updateReservation"
            :telephone="reservations[updateReservation].telephone"
            :date_reservation="reservations[updateReservation].date_reservation"
            :id_jour="reservations[updateReservation].id_jour"
            :heure="reservations[updateReservation].heure"
            :nombre_personnes="reservations[updateReservation].nombre_personnes"
            />
        <AjoutReservation v-if="updateReservation===null"/>
        <div class="button" @click="openUtilisateur">
            <span><svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#6C9E41"><path d="M431.33-120v-230H498v82h342v66.67H498V-120h-66.67ZM120-201.33V-268h244.67v66.67H120Zm178-164v-81.34H120v-66.66h178V-596h66.67v230.67H298Zm133.33-81.34v-66.66H840v66.66H431.33Zm164-163.33v-230H662v81.33h178V-692H662v82h-66.67ZM120-692v-66.67h408.67V-692H120Z"/></svg></span>
            <span>Utilisateurs</span>
            <span><svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#FFFFFF"><path d="M431.33-120v-230H498v82h342v66.67H498V-120h-66.67ZM120-201.33V-268h244.67v66.67H120Zm178-164v-81.34H120v-66.66h178V-596h66.67v230.67H298Zm133.33-81.34v-66.66H840v66.66H431.33Zm164-163.33v-230H662v81.33h178V-692H662v82h-66.67ZM120-692v-66.67h408.67V-692H120Z"/></svg></span>
        </div>
        <div class="select visible" :class="{hidden : isOpenUtilisateur===false}" v-if="!isLoading && utilisateurs && utilisateurs.length>0">
            <div class="options" :class="{selectedOpt : updateUtilisateur===i}" v-for="(utilisateur, i) in utilisateurs" @click="utilisateurClick(i)">
                <p>{{ utilisateur.nom }}</p>
                <p>{{ utilisateur.prenom }}</p>
                <p>{{ utilisateur.telephone }}</p>
                <p>{{ utilisateur.email }}</p>
                <p>{{ utilisateur.newsletter?'Newsletter':'' }}</p>
                <p>{{ utilisateur.banni?'Banni':'' }}</p>
            </div>
        </div>
        <UpdateUtilisateur
            v-if="updateUtilisateur!==null && utilisateurs[updateUtilisateur]"
            :id="updateUtilisateur"
            :nom="utilisateurs[updateUtilisateur].nom"
            :prenom="utilisateurs[updateUtilisateur].prenom"
            :telephone="utilisateurs[updateUtilisateur].telephone"
            :email="utilisateurs[updateUtilisateur].email"
            :newsletter="utilisateurs[updateUtilisateur].newsletter"
            :banni="utilisateurs[updateUtilisateur].banni"
            />
        <AjoutUtilisateur v-if="updateUtilisateur===null"/>
        <div class="button" @click="openBlog">
            <span><svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#6C9E41"><path d="M431.33-120v-230H498v82h342v66.67H498V-120h-66.67ZM120-201.33V-268h244.67v66.67H120Zm178-164v-81.34H120v-66.66h178V-596h66.67v230.67H298Zm133.33-81.34v-66.66H840v66.66H431.33Zm164-163.33v-230H662v81.33h178V-692H662v82h-66.67ZM120-692v-66.67h408.67V-692H120Z"/></svg></span>
            <span>Blog</span>
            <span><svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#FFFFFF"><path d="M431.33-120v-230H498v82h342v66.67H498V-120h-66.67ZM120-201.33V-268h244.67v66.67H120Zm178-164v-81.34H120v-66.66h178V-596h66.67v230.67H298Zm133.33-81.34v-66.66H840v66.66H431.33Zm164-163.33v-230H662v81.33h178V-692H662v82h-66.67ZM120-692v-66.67h408.67V-692H120Z"/></svg></span>
        </div>
        <div class="select visible" :class="{hidden : isOpenBlog===false}" v-if="!isLoading && blogs && blogs.length>0">
            <div class="options" :class="{selectedOpt : updateBlog===i}" v-for="(blog, i) in blogs" @click="blogClick(i)">
                <p>{{ blog.titre }}</p>
                <p>{{ blog.corps.slice(0,50) }}...</p>
            </div>
        </div>
        <UpdateBlog
            v-if="updateBlog!==null && blogs[updateBlog]"
            :id="updateBlog"
            :titre="blogs[updateBlog].titre"
            :corps="blogs[updateBlog].corps"
            />
        <AjoutBlog v-if="updateBlog===null"/>
        <div class="button" @click="openHoraire">
            <span><svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#6C9E41"><path d="M431.33-120v-230H498v82h342v66.67H498V-120h-66.67ZM120-201.33V-268h244.67v66.67H120Zm178-164v-81.34H120v-66.66h178V-596h66.67v230.67H298Zm133.33-81.34v-66.66H840v66.66H431.33Zm164-163.33v-230H662v81.33h178V-692H662v82h-66.67ZM120-692v-66.67h408.67V-692H120Z"/></svg></span>
            <span>Horaires</span>
            <span><svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#FFFFFF"><path d="M431.33-120v-230H498v82h342v66.67H498V-120h-66.67ZM120-201.33V-268h244.67v66.67H120Zm178-164v-81.34H120v-66.66h178V-596h66.67v230.67H298Zm133.33-81.34v-66.66H840v66.66H431.33Zm164-163.33v-230H662v81.33h178V-692H662v82h-66.67ZM120-692v-66.67h408.67V-692H120Z"/></svg></span>
        </div>
        <div class="select visible" :class="{hidden : isOpenHoraire===false}" v-if="!isLoading && horaires && horaires.length>0">
            <div class="options" :class="{selectedOpt : updateHoraire===i}" v-for="(horaire, i) in horaires" @click="horaireClick(i)">
                <p>Le {{ horaire.jour }}</p>
                <p>de {{ Math.floor((horaire.ouverture_matin)/100).toString().length<2?'0'+Math.floor((horaire.ouverture_matin)/100).toString():Math.floor((horaire.ouverture_matin)/100).toString() }}h{{ (horaire.ouverture_matin-Math.floor((horaire.ouverture_matin)/100)*100).toString().length<2?(horaire.ouverture_matin-Math.floor((horaire.ouverture_matin)/100)*100).toString()+'0':(horaire.ouverture_matin-Math.floor((horaire.ouverture_matin)/100)*100).toString() }}</p>
                <p>à {{ Math.floor((horaire.fermeture_matin)/100).toString().length<2?'0'+Math.floor((horaire.fermeture_matin)/100).toString():Math.floor((horaire.fermeture_matin)/100).toString() }}h{{ (horaire.fermeture_matin-Math.floor((horaire.fermeture_matin)/100)*100).toString().length<2?(horaire.fermeture_matin-Math.floor((horaire.fermeture_matin)/100)*100).toString()+'0':(horaire.fermeture_matin-Math.floor((horaire.fermeture_matin)/100)*100).toString() }}</p>
                <p>et de {{ Math.floor((horaire.ouverture_soir)/100).toString().length<2?'0'+Math.floor((horaire.ouverture_soir)/100).toString():Math.floor((horaire.ouverture_soir)/100).toString() }}h{{ (horaire.ouverture_soir-Math.floor((horaire.ouverture_soir)/100)*100).toString().length<2?(horaire.ouverture_soir-Math.floor((horaire.ouverture_soir)/100)*100).toString()+'0':(horaire.ouverture_soir-Math.floor((horaire.ouverture_soir)/100)*100).toString() }}</p>
                <p>à {{ Math.floor((horaire.fermeture_soir)/100).toString().length<2?'0'+Math.floor((horaire.fermeture_soir)/100).toString():Math.floor((horaire.fermeture_soir)/100).toString() }}h{{ (horaire.fermeture_soir-Math.floor((horaire.fermeture_soir)/100)*100).toString().length<2?(horaire.fermeture_soir-Math.floor((horaire.fermeture_soir)/100)*100).toString()+'0':(horaire.fermeture_soir-Math.floor((horaire.fermeture_soir)/100)*100).toString() }}</p>
            </div>
        </div>
        <UpdateHoraire
            v-if="updateHoraire!==null && horaires[updateHoraire]"
            :id="updateHoraire"
            :ouverture_matin="horaires[updateHoraire].ouverture_matin"
            :fermeture_matin="horaires[updateHoraire].fermeture_matin"
            :ouverture_soir="horaires[updateHoraire].ouverture_soir"
            :fermeture_soir="horaires[updateHoraire].fermeture_soir"
            />
        <UpdateCapacite
            :id="0"
            :nombre_personnes="capacite[0].nombre_personnes"
            />
    </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { useStore } from 'vuex';

import AjoutPlat from '@/components/AjoutPlat.vue'
import AjoutPromo from '@/components/AjoutPromo.vue';
import AjoutReservation from '@/components/AjoutReservation.vue';
import AjoutUtilisateur from '@/components/AjoutUtilisateur.vue';
import AjoutBlog from '@/components/AjoutBlog.vue';
import UpdatePlat from '@/components/UpdatePlat.vue';
import UpdatePromo from '@/components/UpdatePromo.vue';
import UpdateReservation from '@/components/UpdateReservation.vue';
import UpdateUtilisateur from '@/components/UpdateUtilisateur.vue';
import UpdateBlog from '@/components/UpdateBlog.vue';
import UpdateHoraire from '@/components/UpdateHoraire.vue';
import UpdateCapacite from '@/components/UpdateCapacite.vue';

// TODO: Login, finir le back-office
const store = useStore();
const token = computed(() => store.getters.token);
const menus = computed(() => store.getters.allMenus);
const promotions = computed(() => store.getters.allPromotions);
const reservations = computed(() => store.getters.allReservations);
const utilisateurs = computed(() => store.getters.allUtilisateurs);
const blogs = computed(() => store.getters.allBlog);
const capacite = computed(() => store.getters.allCapacite);
const horaires = computed(() => store.getters.allHoraires);
const isLoading = ref(true);
const isOpenMenu = ref(false);
const isOpenPromotion = ref(false);
const isOpenReservation = ref(false);
const isOpenUtilisateur = ref(false);
const isOpenBlog = ref(false);
const isOpenHoraire = ref(false);
const updateMenu = ref(null);
const updatePromotion = ref(null);
const updateReservation = ref(null);
const updateUtilisateur = ref(null);
const updateBlog = ref(null);
const updateHoraire = ref(null);

const menuClick = (i) => {
    updateMenu.value!==i?updateMenu.value=i:updateMenu.value=null;
}
const promotionClick = (i) => {
    updatePromotion.value!==i?updatePromotion.value=i:updatePromotion.value=null;
}
const reservationClick = (i) => {
    updateReservation.value!==i?updateReservation.value=i:updateReservation.value=null;
}
const utilisateurClick = (i) => {
    if(utilisateurs.value[i].role!=='admin')
    updateUtilisateur.value!==i?updateUtilisateur.value=i:updateUtilisateur.value=null;
}
const blogClick = (i) => {
    updateBlog.value!==i?updateBlog.value=i:updateBlog.value=null;
}
const horaireClick = (i) => {
    updateHoraire.value!==i?updateHoraire.value=i:updateHoraire.value=null;
}
const openMenu = () => {
  isOpenMenu.value!==true?isOpenMenu.value=true:isOpenMenu.value=false;
}
const openPromotion = () => {
  isOpenPromotion.value!==true?isOpenPromotion.value=true:isOpenPromotion.value=false;
}
const openReservation = () => {
  isOpenReservation.value!==true?isOpenReservation.value=true:isOpenReservation.value=false;
}
const openUtilisateur = () => {
  isOpenUtilisateur.value!==true?isOpenUtilisateur.value=true:isOpenUtilisateur.value=false;
}
const openBlog = () => {
  isOpenBlog.value!==true?isOpenBlog.value=true:isOpenBlog.value=false;
}
const openHoraire = () => {
  isOpenHoraire.value!==true?isOpenHoraire.value=true:isOpenHoraire.value=false;
}
onMounted(async () => {
  try {
    await store.dispatch('fetchAllUtilisateurs', { token: token.value });
    await store.dispatch('fetchAllMenus');
    await store.dispatch('fetchAllPromotions');
    await store.dispatch('fetchAllReservations');
    await store.dispatch('fetchAllBlog');
    await store.dispatch('fetchAllCapacite');
    await store.dispatch('fetchAllHoraires');
  } catch (error) {
    console.error('Erreur lors du chargement des données:', error);
  }
  isLoading.value = false;
});
</script>

<style scoped lang="scss">
h2 {
  margin: 2rem;
  padding-top: 10vh;
  font-family: Roboto, sans-serif;
  color: #DE7B14;
  font-size: 25px;
  text-align: center;
}

.button {
    display: flex;
    justify-content: space-between;
    padding: 1px 1rem;
    margin-top: 1rem;
    justify-self: center;
    align-items: center;
    width: 85%;
    color: #6C9E41;
    background-color: #fff;
    border: solid 2px #6C9E41;
    border-radius: 12px;
}

.button>span:last-of-type {
    color: #fff;
}

.select {
    height: 6rem;
    overflow-y: scroll;
    justify-self: center;
    background-color: #fff;
    gap: 0.5rem;
    width: 100%;
    max-width: 80%;
    min-width: 50%;
}
  
.visible {
  display: flex;
  flex-direction: column;
}

.hidden {
  display: none;
}

.options {
    display: flex;
    gap: 0.5rem;
    font-size: 8px;
    color: #DE7B14;
    background-color: white;
    text-align: start;
    cursor: pointer;
}

.options:hover {
    color: white;
    background-color: #6C9E41;
}

.selectedOpt {
    color: white;
    background-color: #DE7B14;
}

form{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    border-radius: 12px;
    background-color: #6C9E41;
}

@media screen and (min-width: 600px) {
    .select {
        height: 12rem;
    }
    .button {
        width: 80%;
    }
    form {
        margin: 3.5rem;
    }
}
</style>
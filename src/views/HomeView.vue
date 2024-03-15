<script>
import HomeHeader from '../components/HomeHeader.vue';
import HomeViewBlockFooter from '../components/HomeFooter.vue';
import { initFlowbite } from 'flowbite';

export default {
    components: {
        HomeHeader,
        HomeViewBlockFooter
    },
    mounted() {
        initFlowbite()
    },
    data() {
        return {
            teamMembers: [
                { name: 'Озодов Бехруз', title: 'CEO', avatar: '/team/ozodov-bekhruz.jpg'},
                { name: 'Худоёров Хисрав', title: 'Frontend Разработчик', avatar: '/team/khudoyorov-khisrav.jpg'},
                { name: 'Имангулов Ролан', title: 'Backend Разработчик', avatar: '/team/imangulov-rolan.jpg'},
                { name: 'Мишин Андрей', title: 'Project Manager', avatar: '/team/mishin-andrey.jpg'},
                { name: 'Трофимова Анна', title: 'Project Manager', avatar: '/team/trofimova-anna.jpg'},
                { name: 'Шабунина Милана', title: 'HR', avatar: '/team/shabunina-milana.jpg'},
                { name: 'Кондратьев Максим', title: 'SMM Специалист', avatar: '/team/kondratev-maxim.jpg'},
                { name: 'Плеханов Сергей', title: 'Product Manager', avatar: '/team/plehanov-sergey.jpg'},
                { name: 'Абдулгужин Ильхан', title: 'Product Manager', avatar: '/team/abdulguzhin-ilhan.jpg'},
            ]
        }
    }
}
</script>

<template>
<div>
    <HomeHeader/> 
    
    <section class="bg-white dark:bg-gray-900">
        <div class="py-16 px-4 mx-auto max-w-screen-xl text-center lg:py-40 lg:px-12">
            <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">RCONNECT - платформа для студентов</h1>
            <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-40 dark:text-gray-400">Мы предоставляем платформу для обмена идеями, поиска партнеров по проектам и создания собственного уникального следа в студенческом сообществе.</p>
            
            <div class="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                <router-link to="/register" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                    Подключиться
                    <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </router-link>
                <a href="#" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                    <svg class="mr-2 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path></svg> 
                    Посмотреть видео
                </a>
            </div>
        </div>
    </section>

    <section class="bg-white dark:bg-gray-900" id="about">
        <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
            <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">RCONNECT - большая семья</h2>
                <p class="mb-4">Наша веб-платформа — инновационное пространство для студентов, где творчество и развитие идут рука об руку. Помогаем студентам строить свои уникальные проекты, находить единомышленников и воплощать свои идеи в жизнь. Вместе мы создаем сообщество, где студенты не просто учатся, а творят будущее.</p>
                <p>Подключайся!</p>
            </div>
            <div class="grid grid-cols-2 gap-4 mt-8">
                <img class="w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png" alt="office content 1">
                <img class="mt-4 w-full lg:mt-10 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png" alt="office content 2">
            </div>
        </div>
    </section>
    
    <section class="bg-white dark:bg-gray-900">
        <h2 class="mb-4 text-4xl text-center tracking-tight font-extrabold text-gray-900 dark:text-white">Наши достижения в цифрах</h2>
        <div class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
            <dl class="grid max-w-screen-md gap-8 mx-auto text-gray-900 sm:grid-cols-3 dark:text-white">
                <div class="flex flex-col items-center justify-center">
                    <dt class="mb-2 text-3xl md:text-4xl font-extrabold">73M+</dt>
                    <dd class="font-light text-gray-500 dark:text-gray-400">students</dd>
                </div>
                <div class="flex flex-col items-center justify-center">
                    <dt class="mb-2 text-3xl md:text-4xl font-extrabold">1B+</dt>
                    <dd class="font-light text-gray-500 dark:text-gray-400">dollars</dd>
                </div>
                <div class="flex flex-col items-center justify-center">
                    <dt class="mb-2 text-3xl md:text-4xl font-extrabold">4M+</dt>
                    <dd class="font-light text-gray-500 dark:text-gray-400">universities</dd>
                </div>
            </dl>
        </div>
    </section>

    <section class="bg-white dark:bg-gray-900" id="team">
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div class="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Наша команда</h2>
                <p class="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">Наша команда, состоящая из преданных студентов, стремится к тому, чтобы каждый мог достичь своих учебных и карьерных целей, предлагая вдохновение, поддержку и уникальные возможности для развития.</p>
            </div>
            <!-- grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 -->
            <div class="flex flex-wrap justify-center">
                <div v-for="member in teamMembers" class="lg:w-1/5 sm:w-1/3 m-3 h-full relative rounded-xl shadow-2xl">
                    <img :src="member.avatar" width="100%" alt="" class="rounded-xl">
                    <div class="transition rounded-xl bg-opacity-75 bg-blue-900 opacity-0 hover:opacity-100 text-slate-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-center px-5 pb-5">
                        <div>
                            <h3 class="text-xl font-bold tracking-tight text-white">{{ member.name }}</h3>
                            <span class="">{{ member.title }}</span>
                            <!-- <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Jese drives the technical strategy of the themesberg platform and brand.</p> -->
                            <!-- <ul class="flex space-x-4 sm:mt-0">
                                <li>
                                    <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd"></path></svg>
                                    </a>
                                </li>
                            </ul> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="bg-white dark:bg-gray-900" id="contacts">
        <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
            <div class="px-4 mx-auto max-w-screen-sm text-center lg:px-6 mb-8 lg:mb-16">
                <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Контакты</h2>
                <p class="font-light text-gray-600 dark:text-gray-400 sm:text-xl">Мы всегда на связи</p>
            </div>
            <div class="grid grid-cols-1 lg:gap-8 lg:grid-cols-3">
                <div class="col-span-2 mb-8 lg:mb-0">
                    <form action="#" class="grid grid-cols-1 gap-8 mx-auto max-w-screen-md sm:grid-cols-2">
                        <div>
                            <label for="first-name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Как к вам обращаться?</label>
                            <input type="text" id="first-name" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Bonnie" required>
                        </div>
                        <div>
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Ваша почта</label>
                            <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required>
                        </div>
                        <div class="sm:col-span-2">
                            <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Ваше сообщение</label>
                            <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                            <p class="mt-4 text-sm text-gray-500">Отправляя эту форму, вы соглашаетесь с <a href="#" class="text-primary-600 hover:underline dark:text-primary-500">политикой конфиденциальности</a> данного сайта</p>
                        </div>
                        <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Отправить</button>
                    </form>
                </div>
                <div class="grid grid-cols-1 col-span-1 gap-8 text-center sm:grid-cols-2 lg:grid-cols-1">
                    <div>
                        <div class="flex justify-center items-center mx-auto mb-4 w-10 h-10 bg-gray-100 rounded-lg dark:bg-gray-800 lg:h-16 lg:w-16">
                            <svg class="w-5 h-5 text-gray-600 lg:w-8 lg:h-8 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clip-rule="evenodd"></path></svg>
                        </div>
                        <p class="mb-2 text-xl font-bold text-gray-900 dark:text-white">Юр. информация:</p>
                        <p class="text-gray-500 dark:text-gray-400">ООО "RCONNECT"<br>ОГРН: 3498327498327</p>
                    </div>
                    <div>
                        <div class="flex justify-center items-center mx-auto mb-4 w-10 h-10 bg-gray-100 rounded-lg dark:bg-gray-800 lg:h-16 lg:w-16">
                            <svg class="w-5 h-5 text-gray-600 lg:w-8 lg:h-8 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path></svg>
                        </div>
                        <p class="mb-2 text-xl font-bold text-gray-900 dark:text-white">Адрес:</p>
                        <p class="text-gray-500 dark:text-gray-400">SILVER LAKE, United States 1941 Late Avenue <br> Zip Code/Postal code:03875</p>
                    </div>
                    <div>
                        <div class="flex justify-center items-center mx-auto mb-4 w-10 h-10 bg-gray-100 rounded-lg dark:bg-gray-800 lg:h-16 lg:w-16">
                            <svg class="w-5 h-5 text-gray-600 lg:w-8 lg:h-8 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>
                        </div>
                        <p class="mb-2 text-xl font-bold text-gray-900 dark:text-white">Телефоны:</p>
                        <p class="font-semibold text-primary-600 dark:text-primary-500">+1 (646) 786-5060</p>
                        <p class="font-semibold text-primary-600 dark:text-primary-500">+1 (646) 786-5060</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <HomeViewBlockFooter/>
</div>
</template>../components/HomeViewBlockFooter.vue

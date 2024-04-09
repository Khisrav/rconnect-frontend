<script>
import UserNavbar from '../components/UserNavbar.vue';
import { getRandomAvatar } from '../core/user';

export default {
    data() {
        return {
            avatarSVG: ''
        };
    },
    components: {
        UserNavbar
    },
    async beforeMount() {
        try {
            this.avatarSVG = await getRandomAvatar(localStorage.getItem('token'));
        } catch (error) {
            console.error('Error getting avatar:', error);
        }
    }
};

</script>

<template>
<div>
    <UserNavbar></UserNavbar>
    <main class="p-4 md:ml-64 pt-20 bg-slate-200 dark:bg-gray-900 text-gray-900 dark:text-white">
        <div class="">
            <div class="grid grid-cols-1 xl:grid-cols-3 xl:gap-4">

            <!-- Right Content -->
            <div class="col-span-full xl:col-auto">
                <div class="p-4 mb-4 bg-white rounded-2xl sm:p-6 xl:p-8 dark:bg-gray-800">
                <div class="sm:flex xl:block sm:space-x-4 xl:space-x-0">
                    <img class="mb-2 w-20 h-20 rounded-full" :src="avatarSVG" alt="Jese portrait">
                    <div>
                        <h2 class="text-xl font-bold dark:text-white">Jese Leos</h2>
                        <ul class="mt-2 space-y-1">
                            <li class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
                                <svg class="mr-2 w-4 h-4 text-gray-900 dark:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clip-rule="evenodd"></path><path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path></svg>
                                Front-end Developer
                            </li>
                            <li class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
                                <svg class="mr-2 w-4 h-4 text-gray-900 dark:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path></svg>
                                San Francisco, USA
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="sm:flex xl:block xl:space-y-4">
                    <div class="sm:flex-1">
                        <address class="text-sm not-italic font-normal text-gray-500 dark:text-gray-400">
                            <div class="mt-4">
                                Email address
                            </div>
                            <a class="text-sm font-medium text-gray-900 dark:text-white" href="mailto:webmaster@flowbite.com">yourname@flowbite.com</a>
                            <div class="mt-4">
                                Home address
                            </div>
                            <div class="mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                92 Miles Drive, Newark, NJ 07103, California, <br>United States of America
                            </div>
                            <div class="mt-4">
                                Phone number
                            </div>
                            <div class="mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                +00 123 456 789 / +12 345 678 
                            </div>
                        </address>
                    </div>
                    <div class="hidden sm:flex-1">
                        <h3 class="mb-2 text-base font-bold text-gray-900 dark:text-white">About</h3>
                        <p class="text-sm font-normal text-gray-500 dark:text-gray-400">
                            Dedicated, passionate, and accomplished Full Stack Developer with 9+ years of progressive experience working as an Independent Contractor for Google and developing and growing my educational social network that helps others learn programming, web design, game development, networking.
                        </p>
                    </div>
                </div>
                </div>
                <div class="p-4 mb-4 bg-white rounded-2xl sm:p-6 xl:p-8 dark:bg-gray-800">
                <div class="flow-root">
                    <h3 class="text-xl font-bold dark:text-white">Hobbies</h3>
                    <ul class="flex flex-wrap mt-4">
                        <li class="bg-primary-100 dark:bg-primary-200 text-primary-800 text-base font-medium px-3 py-1.5 rounded-md mb-2 mr-2">Football</li>
                        <li class="bg-primary-100 dark:bg-primary-200 text-primary-800 text-base font-medium px-3 py-1.5 rounded-md mb-2 mr-2">Dogs</li>
                        <li class="bg-primary-100 dark:bg-primary-200 text-primary-800 text-base font-medium px-3 py-1.5 rounded-md mb-2 mr-2">Gaming</li>
                        <li class="bg-primary-100 dark:bg-primary-200 text-primary-800 text-base font-medium px-3 py-1.5 rounded-md mb-2 mr-2">Movies</li>
                        <li class="bg-primary-100 dark:bg-primary-200 text-primary-800 text-base font-medium px-3 py-1.5 rounded-md mb-2 mr-2">Travelling</li>
                        <li class="bg-primary-100 dark:bg-primary-200 text-primary-800 text-base font-medium px-3 py-1.5 rounded-md mb-2 mr-2">Surf</li>
                        <li class="bg-primary-100 dark:bg-primary-200 text-primary-800 text-base font-medium px-3 py-1.5 rounded-md mb-2 mr-2">Ice Skating</li>
                        <li class="bg-primary-100 dark:bg-primary-200 text-primary-800 text-base font-medium px-3 py-1.5 rounded-md mb-2">The Witcher</li>
                    </ul>
                </div>
                </div>
            </div>
            <div class="col-span-2">
                <div class="p-4 mb-4 bg-white rounded-2xl sm:p-6 xl:p-8 dark:bg-gray-800">
                    <h3 class="mb-4 text-xl font-bold dark:text-white">General information</h3>
                    <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                        <div class="sm:col-span-2">
                            <dt class="text-lg font-medium text-gray-900 dark:text-white">About me</dt>
                            <dd class="mt-1 space-y-3 max-w-prose text-sm text-gray-500 dark:text-gray-400">
                                <p>Tincidunt quam neque in cursus viverra orci, dapibus nec tristique. Nullam ut sit dolor consectetur urna, dui cras nec sed. Cursus risus congue arcu aenean posuere aliquam.</p>
                                <p>Et vivamus lorem pulvinar nascetur non. Pulvinar a sed platea rhoncus ac mauris amet. Urna, sem pretium sit pretium urna, senectus vitae. Scelerisque fermentum, cursus felis dui suspendisse velit pharetra. Augue et duis cursus maecenas eget quam lectus. Accumsan vitae nascetur pharetra rhoncus praesent dictum risus suspendisse.</p>
                            </dd>
                        </div>
                        <div>
                            <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">Education</dt>
                            <dd class="text-sm font-semibold text-gray-900 dark:text-white">Thomas Jeff High School, Stanford University</dd>
                        </div>
                        <div>
                            <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">Work History</dt>
                            <dd class="text-sm font-semibold text-gray-900 dark:text-white">Twitch, Google, Apple</dd>
                        </div>
                        <div>
                            <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">Join Date</dt>
                            <dd class="text-sm font-semibold text-gray-900 dark:text-white">12-09-2021 </dd>
                        </div>
                        <div>
                            <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">Languages</dt>
                            <dd class="text-sm font-semibold text-gray-900 dark:text-white">English, German, Italian, Spanish </dd>
                        </div>
                        <div>
                            <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">Organization</dt>
                            <dd class="text-sm font-semibold text-gray-900 dark:text-white">Themesberg LLC </dd>
                        </div>
                        <div>
                            <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">Role</dt>
                            <dd class="text-sm font-semibold text-gray-900 dark:text-white">Graphic Designer</dd>
                        </div>
                        <div>
                            <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">Department</dt>
                            <dd class="text-sm font-semibold text-gray-900 dark:text-white">Marketing</dd>
                        </div>
                        <div>
                            <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">Birthday</dt>
                            <dd class="text-sm font-semibold text-gray-900 dark:text-white">15-08-1990 </dd>
                        </div>
                    </dl>
                </div>
            </div>
        </div>
        </div>
    </main>
</div>
</template>
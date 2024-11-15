<template>


    <main class="w-screen bg-[#020018] h-fit">

        <!-- Hero Section -->
        <section class="w-full h-screen bg-transparent">
            <!-- NavBar -->
            <div class="w-full fixed z-50 p-[16px]">
                <NavBar></NavBar>
            </div>

            <!-- Hero Section Content -->
            <div class="h-full w-full flex flex-col justify-end gap-[40px] p-[16px]">
                <!-- Hero Text and Call To Action -->
                <div class="flex flex-col gap-[20px] z-10">
                    <!-- Hero Text -->
                    <div class="flex flex-col gap-[12px]">
                        <h1 class="text-[32px] font-ab font-bold leading-[41.60px] text-[#3ce5ff]">We create
                            ridiculously
                            good
                            digital experiences</h1>
                        <p class="text-[#C4C7D2] text-[18px] font-ws">Innovative Software Solutions, Tailored for
                            Success.</p>
                    </div>

                    <!-- Call To Action -->
                    <div class="animated-button">
                        <p>
                            Let's Talk
                        </p>
                    </div>
                </div>

                <!-- Hero Image -->
                <div class="w-full h-fit">
                    <img src="../assets/Homepage/heroimg.png" alt="Gero section Image">
                </div>
            </div>
        </section>


        <!-- Key metrics  -->
        <section class="w-full h-fit flex flex-col pl-[16px] py-[32px] text-white">
            <div class="w-full flex gap-[12px] py-[16px] pr-[16px] border-b-[0.5px] border-b-[#415049]">
                <div class="w-[48px] h-[48px]">
                    <img class="w-full h-full object-cover" src="../assets/Homepage/Icons/globeicon.png"
                        alt="Globe Icon">
                </div>
                <div class="flex flex-col gap-[8px]">
                    <p class="text-[24px] font-ab font-semibold">20+</p>
                    <p class="text-[#D9DDED] font-ws text-[16px]">Innovative Solutions Delivered</p>
                </div>
            </div>
            <div class="w-full flex gap-[12px] py-[16px] pr-[16px] border-b-[0.5px] border-b-[#415049]">
                <div class="w-[48px] h-[48px]">
                    <img class="w-full h-full object-cover" src="../assets/Homepage/Icons/handshakeicon.png"
                        alt="Globe Icon">
                </div>
                <div class="flex flex-col gap-[8px]">
                    <p class="text-[24px] font-ab font-semibold">10+</p>
                    <p class="text-[#D9DDED] font-ws text-[16px]">Trusted Partners Across the Continent</p>
                </div>
            </div>
            <div class="w-full flex gap-[12px] py-[16px] pr-[16px] border-b-[0.5px] border-b-[#415049]">
                <div class="w-[48px] h-[48px]">
                    <img class="w-full h-full object-cover" src="../assets/Homepage/Icons/lightbulbicon.png"
                        alt="Globe Icon">
                </div>
                <div class="flex flex-col gap-[8px]">
                    <p class="text-[24px] font-ab font-semibold">20+</p>
                    <p class="text-[#D9DDED] font-ws text-[16px]">Countries, Infinite Possibilities</p>
                </div>
            </div>
        </section>


        <!-- About Us -->
        <section class="w-full h-fit px-[16px] py-[80px]">
            <h2 class="text-[#A7B9C0] text-[14px] font-ab font-bold">About Us</h2>
            <div class="w-full flex flex-col gap-[12px] mt-[12px] text-[#EAF2FF] text-[24px] font-ws ">
                <p>
                    We’re a group of passionate developers, designers, and strategists who bring a unique blend of
                    expertise
                    to tackle the challenges of African markets.
                </p>
                <p>Our mission is to build sustainable tech that propels Africa forward, delivering high-quality
                    software
                    that drives growth and fosters trusted partnerships.</p>
            </div>

        </section>


        <!-- Services -->
        <section class="w-full h-fit flex flex-col gap-[48px] px-[16px] py-[80px]">
            <div class="w-full flex flex-col gap-[12px] mt-[12px]">
                <h2 class="text-[#A7B9C0] text-[14px] font-ab font-bold">Services</h2>
                <p class=" text-[#EAF2FF] text-[24px] font-ws ">
                    We create digital masterpieces—sleek products, captivating websites, dynamic apps, and striking
                    visual identities.
                </p>
            </div>
            <div>
                <div class="w-full flex gap-[12px] py-[16px] pr-[16px] border-b-[0.5px] border-b-[#415049]">
                    <div class="text-[#8638B5] text-[14px] font-ws">
                        <p>01</p>
                    </div>
                    <div class="flex flex-col gap-[8px]">
                        <p class="text-[#EAF2FF] text-[18px] font-ab font-semibold">Software Development</p>
                        <p class="text-[#C4C7D2] font-ws text-[16px]">Tailored solutions to fit your unique needs.</p>
                    </div>
                    <div>
                        <Icon icon="mage:plus" width="24" height="24" style="color: #EAF2FF" />
                    </div>
                </div>

                <div class="w-full flex gap-[12px] py-[16px] pr-[16px] border-b-[0.5px] border-b-[#415049]">
                    <div class="text-[#8638B5] text-[14px] font-ws">
                        <p>02</p>
                    </div>
                    <div class="flex flex-col gap-[8px]">
                        <p class="text-[#EAF2FF] text-[18px] font-ab font-semibold">Mobile App Development</p>
                        <p class="text-[#C4C7D2] font-ws text-[16px]">Apps that captivate and convert.</p>
                    </div>
                    <div>
                        <Icon icon="mage:plus" width="24" height="24" style="color: #EAF2FF" />
                    </div>
                </div>

                <div class="w-full flex gap-[12px] py-[16px] pr-[16px] border-b-[0.5px] border-b-[#415049]">
                    <div class="text-[#8638B5] text-[14px] font-ws">
                        <p>03</p>
                    </div>
                    <div class="flex flex-col gap-[8px]">
                        <p class="text-[#EAF2FF] text-[18px] font-ab font-semibold">Web Development</p>
                        <p class="text-[#C4C7D2] font-ws text-[16px]">Stunning websites that drive results.</p>
                    </div>
                    <div>
                        <Icon icon="mage:plus" width="24" height="24" style="color: #EAF2FF" />
                    </div>
                </div>

                <div class="w-full flex gap-[12px] py-[16px] pr-[16px] border-b-[0.5px] border-b-[#415049]">
                    <div class="text-[#8638B5] text-[14px] font-ws">
                        <p>04</p>
                    </div>
                    <div class="flex flex-col gap-[8px]">
                        <p class="text-[#EAF2FF] text-[18px] font-ab font-semibold">UI/UX Design</p>
                        <p class="text-[#C4C7D2] font-ws text-[16px]">User-centered design that delights.</p>
                    </div>
                    <div>
                        <Icon icon="mage:plus" width="24" height="24" style="color: #EAF2FF" />
                    </div>
                </div>

                <div class="w-full flex gap-[12px] py-[16px] pr-[16px] border-b-[0.5px] border-b-[#415049]">
                    <div class="text-[#8638B5] text-[14px] font-ws">
                        <p>05</p>
                    </div>
                    <div class="flex flex-col gap-[8px]">
                        <p class="text-[#EAF2FF] text-[18px] font-ab font-semibold">Chatbot & Machine Learning</p>
                        <p class="text-[#C4C7D2] font-ws text-[16px]">Leveraging AI to solve complex problems.</p>
                    </div>
                    <div>
                        <Icon icon="mage:plus" width="24" height="24" style="color: #EAF2FF" />
                    </div>
                </div>

                <div class="w-full flex gap-[12px] py-[16px] pr-[16px] border-b-[0.5px] border-b-[#415049]">
                    <div class="text-[#8638B5] text-[14px] font-ws">
                        <p>06</p>
                    </div>
                    <div class="flex flex-col gap-[8px]">
                        <p class="text-[#EAF2FF] text-[18px] font-ab font-semibold">Cloud Solutions</p>
                        <p class="text-[#C4C7D2] font-ws text-[16px]">Scalable and secure cloud infrastructure.</p>
                    </div>
                    <div>
                        <Icon icon="mage:plus" width="24" height="24" style="color: #EAF2FF" />
                    </div>
                </div>
            </div>
        </section>


        <!-- Blog -->
        <section id="blog" class="py-[80px] flex flex-col gap-[8px] px-[16px]">
            <h2 class="text-[#3A3A40] font-ab text-[14px] font-bold">Blog</h2>
            <p class="text-[#020018] text-[24px] font-ws leading-[130%]">Valuable insights, exciting stories, and other
                things are worth sharing
                with the world.</p>
        </section>

        <!-- Let's grow together -->
        <section id="lgt" class="py-[80px] flex flex-col items-center gap-[8px] px-[16px] mt-[-1px]">
            <h2 class="text-[#3A3A40] font-ab text-[24px] font-semibold">Let’s Grow Together</h2>
            <p class="text-center text-[#020018] text-[24px] font-ws leading-[130%]">Valuable insights,
                exciting stories, and other
                things are worth sharing
                with the world.</p>
        </section>


        <!-- Clients and Partners -->
        <section class="w-full h-fit flex flex-col gap-[48px] px-[16px] py-[80px]">
            <div class="w-full flex flex-col gap-[12px] mt-[12px]">
                <h2 class="text-[#A7B9C0] text-[14px] font-ab font-bold">Clients and Partners</h2>
                <p class=" text-[#EAF2FF] text-[24px] font-ws ">
                    We’ve worked with these amazing clients and even awesome projects.
                </p>
            </div>
            <div class="w-full flex flex-wrap gap-[16px]">
                <div class="w-fit h-fit">
                    <img src="../assets/Homepage/Partnervectors/mtn.png" alt="Mtn Icon">
                </div>
                <div class="w-fit h-fit">
                    <img src="../assets/Homepage/Partnervectors/fanmilk.png" alt="Mtn Icon">
                </div>
                <div class="w-fit h-fit">
                    <img src="../assets/Homepage/Partnervectors/plugin.png" alt="Mtn Icon">
                </div>
                <div class="w-fit h-fit">
                    <img src="../assets/Homepage/Partnervectors/evolve.png" alt="Mtn Icon">
                </div>

            </div>
        </section>

        <!-- Temp Footer -->
        <section class="w-full h-fit flex flex-col gap-[48px] px-[16px] py-[80px]">
            <div class="w-full flex flex-col gap-[12px] mt-[12px]">
                <h2 class="text-[#A7B9C0] text-[14px] font-ab font-bold">Follow</h2>
                <div class="w-full flex gap-[32px]">
                    <Icon icon="mdi:instagram" width="24" height="24" style="color: white" />
                    <Icon icon="iconoir:youtube" width="24" height="24" style="color: white" />
                    <Icon icon="ri:twitter-x-line" width="24" height="24" style="color: white" />
                    <Icon icon="basil:facebook-outline" width="24" height="24" style="color: white" />
                    <Icon icon="mingcute:linkedin-line" width="24" height="24" style="color: white" />
                </div>
            </div>

            <div class="text-[#F1F3F4] text-[14px] font-ws">
                <p>19 Nii Adjei Onano Street, Accra - Ghana.</p>
                <p>Phone number. +233 20 4223332</p>
            </div>

            <p class="text-[#F1F3F4] text-[14px] font-ws">support@utopiatech.africa</p>

        </section>
    </main>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import { Icon } from '@iconify/vue';

export default {
    name: 'Homepage',
    components: {
        NavBar,
        Icon
    }
}
</script>

<style scoped>
h1 {
    background: linear-gradient(97deg, #3DE5FF 2.52%, #B948FF 80.17%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.animated-button {
    position: relative;
    width: fit-content;
    height: fit-content;
    color: #EAF2FF;
    font-family: 'Anybody';
    font-size: 16px;
    font-weight: bold;
    padding: 12px 24px;
    background: #020018;
    border-radius: 100px;
}

@property --angle {
    syntax: "<angle>";
    initial-value: 360deg;
    inherits: false;
}

.animated-button::after,
.animated-button::before {
    position: absolute;
    content: '';
    height: 108%;
    width: 102%;
    background-image: conic-gradient(from var(--angle), rgba(61, 229, 255, 1), rgba(185, 72, 255, 1), rgba(58, 58, 64, 1), rgba(58, 58, 64, 1), transparent);
    top: 50%;
    left: 50%;
    translate: -50% -50%;
    z-index: -1;
    border-radius: 100px;
    animation: 3s spin linear infinite;
}

.animated-button::before {
    filter: blur(0.5rem);
    opacity: 0.5;
}

@keyframes spin {
    from {
        --angle: 360deg;
    }

    to {
        --angle: 0deg;
    }
}

#blog {
    background-image: url('../assets/Homepage/blogbg.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: fit-content;
    width: 100%;
}

#lgt {
    background-image: url('../assets/Homepage/growtogetherbg.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: fit-content;
    width: 100%;
}
</style>
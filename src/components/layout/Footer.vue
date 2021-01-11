<template>
  <div>
        <div class="bg-primary p-4 xl:p-8 2xl:p-8">
            <div class="grid justify-items-center text-center xs:grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 2xl:grid-cols-6 gap-8 max-w-7xl mx-auto footer-items">
                <div class="flex flex-col justify-items-start">
                    <span class="font-bold text-white">Products</span>
                    <a class="text-base font-light text-white cursor-pointer" href="nabu.html">Modak Nabu™</a>
                </div>
                <div class="flex flex-col justify-items-start">
                    <span class="font-bold text-white">Solutions</span>
                    <a href="managed-dataops.html" class="text-base font-light text-white cursor-pointer">Managed DataOps</a>
                    <a href="data-fabric.html" class="text-base font-light text-white cursor-pointer">Data Fabric</a>
                    <a href="governed-datalake.html" class="text-base font-light text-white cursor-pointer">Governed data lake</a>
                    <a href="Metaprogramming.html" class="text-base font-light text-white cursor-pointer">Metaprogramming</a>
                    <a href="hadoop-managed-services.html" class="text-base font-light text-white cursor-pointer">Hadoop managed services</a>
                    <a href="data-migration.html" class="text-base font-light text-white cursor-pointer">Data migration</a>
                    <a href="data-fingerprinting.html" class="text-base font-light text-white cursor-pointer">Data fingerprinting</a>
                </div>
                <div class="flex flex-col justify-items-start">
                    <span class="font-bold text-white">Our Company</span>
                    <a href="life-modak.html" class="text-base font-light text-white cursor-pointer">Team</a>
                    <a href="work-culture.html" class="text-base font-light text-white cursor-pointer">Work culture</a>
                    <a href="contact-us.html" class="text-base font-light text-white cursor-pointer">Contact us</a>
                </div>
                <div class="flex flex-col justify-items-start text-center">
                    <a class="font-bold text-white">USA</a>
                    <a class="text-base font-light text-white">21660 W Field Parkway,</a>
                    <a class="text-base font-light text-white">Deer Park, IL – 60010,</a>
                    <a class="text-base font-light text-white">USA</a>
                </div>
                <div class="flex flex-col justify-items-start text-center">
                    <a class="font-bold text-white">UAE</a>
                    <a class="text-base font-light text-white">Dubai Silicon Oasis(DSO),</a>
                    <a class="text-base font-light text-white">Dubai, UAE</a>
                </div>
                <div class="flex flex-col justify-items-start text-center">
                    <a class="font-bold text-white">India</a>
                    <a class="text-base font-light text-white">The Platina,</a>
                    <a class="text-base font-light text-white">Gachibowli, Hyderabad</a>
                    <a class="text-base font-light text-white"> India</a>
                </div>
            </div>
            <div class="md:hidden lg:hidden xl:hidden 2xl:hidden flex flex-row justify-center items-center max-w-7xl mx-auto my-4">
                <img src="img/logos/gartner.png" alt="" class="mr-8 cursor-pointer" />
                <img src="img/logos/strata.png" alt="" class="mr-8 cursor-pointer" />
            </div>
            <div class="md:hidden lg:hidden xl:hidden 2xl:hidden flex flex-row justify-center items-center max-w-7xl mx-auto xs:my-2 xl:my-4 2xl:my-4">
                <img src="img/logos/twitter.png" alt="" class="mr-4 cursor-pointer" />
                <img src="img/logos/facebook.png" alt="" class="mr-4 cursor-pointer" />
                <img src="img/logos/linkedin.png" alt="" class="mr-4 cursor-pointer" />
                <img src="img/logos/github.png" alt="" class="mr-4 cursor-pointer" />
            </div>
            <div class="xs:hidden sm:hidden flex flex-row justify-end items-center max-w-7xl mx-auto my-4">
                <img src="img/logos/gartner.png" alt="" class="mr-8 cursor-pointer" />
                <img src="img/logos/strata.png" alt="" class="mr-8 cursor-pointer" />
                <img src="img/logos/twitter.png" alt="" class="mr-4 cursor-pointer" />
                <img src="img/logos/facebook.png" alt="" class="mr-4 cursor-pointer" />
                <img src="img/logos/linkedin.png" alt="" class="mr-4 cursor-pointer" />
                <img src="img/logos/github.png" alt="" class="mr-4 cursor-pointer" />
            </div>
        </div>
    <div class="bg-gray-800 py-1">
        <div class="max-w-7xl mx-auto flex lg:flex-row xl:flex-row 2xl:flex-row justify-between items-center xs:flex-col">
            <div class="text-white copyright font-light xs:text-center">&#9400;2020 Modak Analytics. An ISO 9001 & 27001 company. All Rights Reserved.</div>
            <div class="xs:my-2">
                <a class="font-normal footer-links">
                    <a href="terms.html" class="mr-4 text-gray-200 no-underline">Terms of use</a>
                    <a href="privacy-policy.html" class="mr-4">Privacy policy</a>
                    <a href="disclaimer.html" class="mr-4">Disclaimer</a>
                </a>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Footer'
  }
</script>

<style lang="scss" scoped>
a {
    color: #fff !important;
}
a:hover {
    text-decoration: none;
}
.footer-links a {
    color: #ccc !important;
    font-weight: 300 !important;
    font-size: 0.8rem;
}
footer-links .a:hover {
    color: #fff !important;
    text-decoration: none !important;
}
.copyright {
    font-size: 0.8rem;
}
</style>
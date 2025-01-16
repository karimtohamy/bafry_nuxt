<template>
	<div class="lg:px-40  mx-auto pt-12 p-4 relative">
        <NuxtLink :to="$localePath('studies')" class="absolute top-16 start-10 invisible md:invisible lg:visible" :class=" [ locale == 'ar' ?'rotate-180' : 'rotate-0']">
            <ArrowLeftCircleIcon class="size-10" />
        </NuxtLink>
		<!-- Abstract Section -->
		<div id="section02" class="mt-8">
			<h3 class="text-xl font-semibold">{{ $t('abstract') }}</h3>
			<p class="text-justify mt-2">
				{{ $t('abstract_p') }}
			</p>

			<!-- Materials and Methods -->
			<h3 class="text-xl font-semibold mt-6">{{ $t('ul_1') }}</h3>
			<ol class="list-decimal pl-5 mt-2">
				<li>{{ $t('ul_1_1') }}</li>
				<li>{{ $t('ul_1_2') }}</li>
				<li>{{ $t('ul_1_3') }}</li>
				<li>{{ $t('ul_1_4') }}</li>
				<li>{{ $t('ul_1_5') }}</li>
				<li>{{ $t('ul_1_6') }}</li>
			</ol>

			<!-- Methods -->
			<h3 class="text-xl font-semibold mt-6">{{ $t('methods') }}</h3>
			<ol class="list-decimal pl-5 mt-2">
				<li>{{ $t('clinical_examination') }}</li>
				<li>{{ $t('postmortem_examination') }}</li>
				<li>{{ $t('bacteriological_examination') }}</li>
				<li>{{ $t('mycological_examination') }}
					<ul class="list-disc pl-5 mt-2">
						<li>{{ $t('isolation_of_fungi') }}</li>
						<li>{{ $t('identification_of_isolates') }}</li>
						<li>{{ $t('biochemical_analysis') }}</li>
						<li>{{ $t('histopathological_examination') }}</li>
					</ul>
				</li>
			</ol>

			<!-- Images Section -->
			<div class="flex justify-center mt-6">
				<div class="w-1/2">
					<img class="w-full" src="@/assets/images/Application of bafry D50.png" alt="" />
				</div>
			</div>

			<div class="flex justify-center mt-6">
				<div class="w-1/2">
					<img class="w-full" src="@/assets/images/saftey test.png" alt="" />
				</div>
			</div>

			<!-- Results Section -->
			<h3 class="text-xl font-semibold mt-6">{{ $t('results') }}</h3>
			<ul class="list-decimal pl-5 mt-2">
				<li>{{ $t('result_1') }}</li>
				<li>{{ $t('result_2') }}</li>
				<li>{{ $t('result_3') }}</li>
			</ul>

			<div class="flex justify-center mt-6">
				<div class="w-1/4">
					<img class="w-full" src="@/assets/images/fish1.jpg" alt="" />
				</div>
				<div class="w-1/4">
					<img class="w-full" src="@/assets/images/fish2.jpg" alt="" />
				</div>
			</div>

			<ul class="list-decimal pl-5 mt-4">
				<li>{{ $t('histopathological_results[0]') }}</li>
				<li>{{ $t('histopathological_results[1]') }}</li>
			</ul>

			<div class="flex justify-center mt-6 p-10">
				<div class="w-2/5">
					<img class="h-full" src="@/assets/images/sample1.jpg" alt="" />
				</div>
				<div class="w-2/5">
					<img class="w-full" src="@/assets/images/sample2.jpg" alt="" />
				</div>
			</div>

			<div class="flex justify-center mt-6">
				<div class="w-1/2">
					<img class="w-full" src="@/assets/images/incdence.png" alt="" />
				</div>
			</div>

			<div class="flex justify-center mt-6">
				<div class="w-1/2">
					<img class="w-full" src="@/assets/images/results.png" alt="" />
				</div>
			</div>

			<div class="flex justify-center mt-6">
				<div class="w-1/2">
					<img class="w-full" src="@/assets/images/results2.png" alt="" />
				</div>
			</div>

			<!-- Conclusion Section -->
			<h3 class="text-xl font-semibold mt-6">{{ $t('conclusion') }}</h3>
			<p class="text-justify mt-2">
				{{ $t('conclusion_p') }}
			</p>
		</div>
	</div>
</template>

<script setup>
    import { ArrowLeftCircleIcon } from '@heroicons/vue/24/outline';
	const { locale } = useI18n();
	useHead({
  title: 'Bafry | Study in fish ',
  meta: [
    { name: 'description', content: 'rial of using Bafry D50/500 for control in saprolegniosis in a dose of 0.75 ml/L (375ppm) for 10-12 minutes for 3 successive days as a bath gave good results in treatment of the diseased fish in aquaria, this were indicated the rate of mortality reach 16.7% without any effect on the healthy stat of treated fish and also no effect on hematology and blood chemistry of treated fish with Bafry D50/500. Histopathological finding of treated fish with Bafry D50/500: skin showed increase of M.M.C. and slight sloughing of most superficial layer of epidermis but the gills showed hyperplasia of epithelial cells covering of primary lamellae, this indicate that the infected fish was treated with BafryD50/500.' }
  ],
})
</script>
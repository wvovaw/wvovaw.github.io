<script setup lang="ts">
import { PageSection, WNavbar, WFooter, DoubleHeader, WHeader } from "@/components/UI"
import { TechStack, Contacts, KeyValueTable, ProjectsShowcase, HeroGLSL } from "@/components/Widgets";
import { Grid1x2, GridColumn } from "@/components/Grids";

const siteConfigData = await useAsyncData("site-config", () => queryContent('/site-config').findOne());
const { sitename, navigation, footer } = siteConfigData.data.value!;

const homepageData = await useAsyncData("homepage", () => queryContent('/homepage').findOne());
const { headline, subheadline, shaderPath } = homepageData.data.value?.blocks.hero;
const { personal, techs, projects, contacts } = homepageData.data.value?.blocks;

const showNav = ref(false);
onMounted(() => {
  setTimeout(() => (showNav.value = true), 300);
});
</script>

<template>
  <Transition
    enter-from-class="translate-y-[-10%]"
    enter-active-class="transition duration-300 ease-out"
  >
    <WNavbar
      v-if="showNav" 
      class="absolute w-full"
      :links="navigation.links"
      :sitename="sitename"
    />
  </Transition>
  <main>
    <HeroGLSL
      :headline="headline"
      :subheadline="subheadline"
      :fragment-url="shaderPath"
    />
    <PageSection color="base2">
      <DoubleHeader
        text1="About me"
        text2="Resume"
        color="success"
        anchor="about"
      />
      <Grid1x2>
        <GridColumn>
          <WHeader variant="h2" align="start"> Personal info </WHeader>
          <KeyValueTable :table="personal" />
        </GridColumn>
        <GridColumn>
          <WHeader variant="h2" align="start"> My Stack </WHeader>
          <TechStack :techs="techs" />
        </GridColumn>
      </Grid1x2>
    </PageSection>
    <PageSection color="base1">
      <DoubleHeader
        text1="My works"
        text2="Projects"
        color="accent"
        anchor="projects"
      />
      <ProjectsShowcase :projects="projects" />
    </PageSection>
    <PageSection color="base2">
      <WHeader align="center" variant="h2"> Get in contact </WHeader>
      <Contacts :contacts="contacts" />
    </PageSection>
  </main>
  <WFooter :text="footer.text" />
</template>

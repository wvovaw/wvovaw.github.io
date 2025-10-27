<script setup lang="ts">
const siteConfigData = await useAsyncData(
  "site-config",
  () => queryCollection("siteConfig").first(),
);
const homepageData = await useAsyncData(
  "homepage",
  () => queryCollection("homepage").first(),
);

const { sitename, navigation, footer } = siteConfigData.data.value!;

const { headline, subheadline, shaderPath } = homepageData.data.value!.blocks.hero;
const { personal, techs, projects, contacts } = homepageData.data.value!.blocks;

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
    <UIWNavbar
      v-if="showNav"
      class="absolute w-full"
      :links="navigation.links"
      :sitename="sitename"
    />
  </Transition>
  <main>
    <WidgetsHero
      :headline="headline"
      :subheadline="subheadline"
      :fragment-url="shaderPath"
    />
    <UIPageSection color="base2">
      <UIDoubleHeader
        text1="About me"
        text2="Resume"
        color="success"
        anchor="about"
      />
      <GridsGrid1x2>
        <GridsColumn>
          <UIWHeader variant="h2" align="start">
            Personal info
          </UIWHeader>
          <WidgetsKeyValueTable :table="personal" />
        </GridsColumn>
        <GridsColumn>
          <UIWHeader variant="h2" align="start">
            My Stack
          </UIWHeader>
          <WidgetsTechStack :techs="techs" />
        </GridsColumn>
      </GridsGrid1x2>
    </UIPageSection>
    <UIPageSection color="base1">
      <UIDoubleHeader
        text1="My works"
        text2="Projects"
        color="accent"
        anchor="projects"
      />
      <WidgetsProjectsShowcase :projects="projects" />
    </UIPageSection>
    <UIPageSection color="base2">
      <UIWHeader align="center" variant="h2">
        Get in contact
      </UIWHeader>
      <WidgetsContacts :contacts="contacts" />
    </UIPageSection>
  </main>
  <UIWFooter :text="footer.text" />
</template>

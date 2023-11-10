<script setup lang="ts">
import TechStack from "../components/Widgets/TechStack/index.vue";
import Contacts from "../components/Widgets/Contacts/index.vue";
import PageSection from "@/components/PageSection.vue";
import { Grid1x2, Column } from "@/components/Grids";
import DoubleHeader from "@/components/DoubleHeader.vue";
import { WHeader } from "@/components/UI";
import HeroGLSL from "@/components/Widgets/HeroGLSL/index.vue";
import KeyValueTable from "@/components/Widgets/KeyValueTable/index.vue";
import ProjectsShowcase from "@/components/Widgets/ProjectsShowcase/index.vue";

import { homepageData } from "@/cms";
const data = homepageData;

const { headline, subheadline, shaderPath } = data.hero;
const { personal, techs, projects, contacts } = data;
</script>

<template>
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
        <Column>
          <WHeader variant="h2" align="start"> Personal info </WHeader>
          <KeyValueTable :table="personal" />
        </Column>
        <Column>
          <WHeader variant="h2" align="start"> My Stack </WHeader>
          <TechStack :techs="techs" />
        </Column>
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
</template>

export interface StoryblokStory {
  name:               string;
  created_at:         string;
  published_at:       string;
  id:                 number;
  uuid:               string;
  content:            StoryContent;
  slug:               string;
  full_slug:          string;
  sort_by_date:       null;
  position:           number;
  tag_list:           any[];
  is_startpage:       boolean;
  parent_id:          null;
  meta_data:          null;
  group_id:           string;
  first_published_at: string;
  release_id:         null;
  lang:               string;
  path:               null;
  alternates:         any[];
  default_full_slug:  null;
  translated_slugs:   null;
}

export interface StoryContent {
  _uid:              string;
  [key: string]: any;
}

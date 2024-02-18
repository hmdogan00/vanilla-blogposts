/*
author
: 
631
categories
: 
[1453]
comment_status
: 
"open"
content
: 
{rendered: '\n<p>Canonical is the company behind Ubuntu, but wh…tuwantsyou?lang=en">@UbuntuWantsYou</a>.<br></p>\n', protected: false}
date
: 
"2020-08-25T14:00:03"
date_gmt
: 
"2020-08-25T14:00:03"
excerpt
: 
{rendered: '<p>Canonical is the company behind Ubuntu, but who…ts. We spoke with Lilyana to find [&hellip;]</p>\n', protected: false}
featured_media
: 
"https://ubuntu.com/wp-content/uploads/5288/Title-Cards.jpg"
format
: 
"standard"
group
: 
[2051]
guid
: 
{rendered: 'https://admin.insights.ubuntu.com/?p=97548'}
id
: 
97548
link
: 
"https://ubuntu.com/blog/travel-clis-and-sticky-notes-lilyanas-life-as-a-canonical-ux-designer/"
meta
: 
[]
modified
: 
"2020-08-25T15:47:19"
modified_gmt
: 
"2020-08-25T15:47:19"
ping_status
: 
"closed"
slug
: 
"travel-clis-and-sticky-notes-lilyanas-life-as-a-canonical-ux-designer"
status
: 
"publish"
sticky
: 
false
tags
: 
(2) [2038, 2226]
template
: 
""
title
: 
{rendered: 'Travel, CLIs, and sticky notes: Lilyana’s life as a Canonical UX designer'}
topic
: 
[2052]
type
: 
"post"
_embedded
: 
{author: Array(1), wp:featuredmedia: Array(1), wp:term: Array(4)}
_end_day
: 
"24"
_end_month
: 
"08"
_end_year
: 
"2020"
_event_location
: 
""
_event_registration
: 
""
_event_venue
: 
""
_links
: 
{self: Array(1), collection: Array(1), about: Array(1), author: Array(1), replies: Array(1), …}
_start_day
: 
"24"
_start_month
: 
"08"
_start_year
: 
"2020"
 */

export type Blog = {
  author: number;
  categories: number[];
  parsedCategories?: string[];
  comment_status: string;
  content: {
    rendered: string;
    protected: boolean;
  };
  date: string;
  date_gmt: string;
  excerpt: {
    rendered: string;
    protected: boolean;
  };
  featured_media: string;
  format: string;
  group: number[];
  guid: {
    rendered: string;
  };
  id: number;
  link: string;
  meta: unknown[];
  modified: string;
  modified_gmt: string;
  ping_status: string;
  slug: string;
  status: string;
  sticky: boolean;
  tags: number[];
  template: string;
  title: {
    rendered: string;
  };
  topic: number[];
  type: "article" | "blog" | "post";
  _embedded: {
    author: {
      name: string;
      link: string;
    }[];
  };
  _end_day: string;
  _end_month: string;
  _end_year: string;
  _event_location: string;
  _event_registration: string;
  _event_venue: string;
  _start_day: string;
  _start_month: string;
  _start_year: string;
};

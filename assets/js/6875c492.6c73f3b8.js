"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4813],{26535:(e,t,s)=>{s.d(t,{A:()=>f});var n=s(96540),a=s(34164),r=s(7407),i=s(24581),l=s(28774),o=s(21312),c=s(56347),d=s(99169);function m(e){const{pathname:t}=(0,c.zy)();return(0,n.useMemo)((()=>e.filter((e=>function(e,t){return!(e.unlisted&&!(0,d.ys)(e.permalink,t))}(e,t)))),[e,t])}const u={sidebar:"sidebar_re4s",sidebarItemTitle:"sidebarItemTitle_pO2u",sidebarItemList:"sidebarItemList_Yudw",sidebarItem:"sidebarItem__DBe",sidebarItemLink:"sidebarItemLink_mo7H",sidebarItemLinkActive:"sidebarItemLinkActive_I1ZP"};var g=s(74848);function h(e){let{sidebar:t}=e;const s=m(t.items);return(0,g.jsx)("aside",{className:"col col--3",children:(0,g.jsxs)("nav",{className:(0,a.A)(u.sidebar,"thin-scrollbar"),"aria-label":(0,o.T)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,g.jsx)("div",{className:(0,a.A)(u.sidebarItemTitle,"margin-bottom--md"),children:t.title}),(0,g.jsx)("ul",{className:(0,a.A)(u.sidebarItemList,"clean-list"),children:s.map((e=>(0,g.jsx)("li",{className:u.sidebarItem,children:(0,g.jsx)(l.A,{isNavLink:!0,to:e.permalink,className:u.sidebarItemLink,activeClassName:u.sidebarItemLinkActive,children:e.title})},e.permalink)))})]})})}var x=s(75600);function p(e){let{sidebar:t}=e;const s=m(t.items);return(0,g.jsx)("ul",{className:"menu__list",children:s.map((e=>(0,g.jsx)("li",{className:"menu__list-item",children:(0,g.jsx)(l.A,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active",children:e.title})},e.permalink)))})}function j(e){return(0,g.jsx)(x.GX,{component:p,props:e})}function b(e){let{sidebar:t}=e;const s=(0,i.l)();return t?.items.length?"mobile"===s?(0,g.jsx)(j,{sidebar:t}):(0,g.jsx)(h,{sidebar:t}):null}function f(e){const{sidebar:t,toc:s,children:n,...i}=e,l=t&&t.items.length>0;return(0,g.jsx)(r.A,{...i,children:(0,g.jsx)("div",{className:"container margin-vert--lg",children:(0,g.jsxs)("div",{className:"row",children:[(0,g.jsx)(b,{sidebar:t}),(0,g.jsx)("main",{className:(0,a.A)("col",{"col--7":l,"col--9 col--offset-1":!l}),children:n}),s&&(0,g.jsx)("div",{className:"col col--2",children:s})]})})})}},47713:(e,t,s)=>{s.d(t,{A:()=>i});s(96540);var n=s(21312),a=s(39022),r=s(74848);function i(e){const{metadata:t}=e,{previousPage:s,nextPage:i}=t;return(0,r.jsxs)("nav",{className:"pagination-nav","aria-label":(0,n.T)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[s&&(0,r.jsx)(a.A,{permalink:s,title:(0,r.jsx)(n.A,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer Entries"})}),i&&(0,r.jsx)(a.A,{permalink:i,title:(0,r.jsx)(n.A,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older Entries"}),isNext:!0})]})}},33892:(e,t,s)=>{s.d(t,{A:()=>i});s(96540);var n=s(7131),a=s(77445),r=s(74848);function i(e){let{items:t,component:s=a.A}=e;return(0,r.jsx)(r.Fragment,{children:t.map((e=>{let{content:t}=e;return(0,r.jsx)(n.i,{content:t,children:(0,r.jsx)(s,{children:(0,r.jsx)(t,{})})},t.metadata.permalink)}))})}},33069:(e,t,s)=>{s.r(t),s.d(t,{default:()=>f});s(96540);var n=s(34164),a=s(21312),r=s(53465),i=s(61213),l=s(17559),o=s(28774),c=s(26535),d=s(47713),m=s(41463),u=s(33892),g=s(50996),h=s(51107),x=s(74848);function p(e){const t=function(){const{selectMessage:e}=(0,r.W)();return t=>e(t,(0,a.T)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}();return(0,a.T)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:t(e.count),tagName:e.label})}function j(e){let{tag:t}=e;const s=p(t);return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(i.be,{title:s,description:t.description}),(0,x.jsx)(m.A,{tag:"blog_tags_posts"})]})}function b(e){let{tag:t,items:s,sidebar:n,listMetadata:r}=e;const i=p(t);return(0,x.jsxs)(c.A,{sidebar:n,children:[t.unlisted&&(0,x.jsx)(g.A,{}),(0,x.jsxs)("header",{className:"margin-bottom--xl",children:[(0,x.jsx)(h.A,{as:"h1",children:i}),t.description&&(0,x.jsx)("p",{children:t.description}),(0,x.jsx)(o.A,{href:t.allTagsPath,children:(0,x.jsx)(a.A,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page",children:"View All Tags"})})]}),(0,x.jsx)(u.A,{items:s}),(0,x.jsx)(d.A,{metadata:r})]})}function f(e){return(0,x.jsxs)(i.e3,{className:(0,n.A)(l.G.wrapper.blogPages,l.G.page.blogTagPostListPage),children:[(0,x.jsx)(j,{...e}),(0,x.jsx)(b,{...e})]})}},50996:(e,t,s)=>{s.d(t,{A:()=>g});s(96540);var n=s(34164),a=s(21312),r=s(5260),i=s(74848);function l(){return(0,i.jsx)(a.A,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function o(){return(0,i.jsx)(a.A,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,i.jsx)(r.A,{children:(0,i.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var d=s(17559),m=s(27293);function u(e){let{className:t}=e;return(0,i.jsx)(m.A,{type:"caution",title:(0,i.jsx)(l,{}),className:(0,n.A)(t,d.G.common.unlistedBanner),children:(0,i.jsx)(o,{})})}function g(e){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(c,{}),(0,i.jsx)(u,{...e})]})}},7131:(e,t,s)=>{s.d(t,{e:()=>o,i:()=>l});var n=s(96540),a=s(89532),r=s(74848);const i=n.createContext(null);function l(e){let{children:t,content:s,isBlogPostPage:a=!1}=e;const l=function(e){let{content:t,isBlogPostPage:s}=e;return(0,n.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:s})),[t,s])}({content:s,isBlogPostPage:a});return(0,r.jsx)(i.Provider,{value:l,children:t})}function o(){const e=(0,n.useContext)(i);if(null===e)throw new a.dV("BlogPostProvider");return e}},53465:(e,t,s)=>{s.d(t,{W:()=>c});var n=s(96540),a=s(44586);const r=["zero","one","two","few","many","other"];function i(e){return r.filter((t=>e.includes(t)))}const l={locale:"en",pluralForms:i(["one","other"]),select:e=>1===e?"one":"other"};function o(){const{i18n:{currentLocale:e}}=(0,a.A)();return(0,n.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:i(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),l}}),[e])}function c(){const e=o();return{selectMessage:(t,s)=>function(e,t,s){const n=e.split("|");if(1===n.length)return n[0];n.length>s.pluralForms.length&&console.error(`For locale=${s.locale}, a maximum of ${s.pluralForms.length} plural forms are expected (${s.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);const a=s.select(t),r=s.pluralForms.indexOf(a);return n[Math.min(r,n.length-1)]}(s,t,e)}}},77445:(e,t,s)=>{s.d(t,{A:()=>M});s(96540);var n=s(34164),a=s(7131),r=s(74848);function i(e){let{children:t,className:s}=e;return(0,r.jsx)("article",{className:s,children:t})}var l=s(28774);const o={title:"title_xvU1"};function c(e){let{className:t}=e;const{metadata:s,isBlogPostPage:i}=(0,a.e)(),{permalink:c,title:d}=s,m=i?"h1":"h2";return(0,r.jsx)(m,{className:(0,n.A)(o.title,t),children:i?d:(0,r.jsx)(l.A,{to:c,children:d})})}var d=s(21312),m=s(53465),u=s(36266);const g={container:"container_iJTo"};function h(e){let{readingTime:t}=e;const s=function(){const{selectMessage:e}=(0,m.W)();return t=>{const s=Math.ceil(t);return e(s,(0,d.T)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:s}))}}();return(0,r.jsx)(r.Fragment,{children:s(t)})}function x(e){let{date:t,formattedDate:s}=e;return(0,r.jsx)("time",{dateTime:t,children:s})}function p(){return(0,r.jsx)(r.Fragment,{children:" \xb7 "})}function j(e){let{className:t}=e;const{metadata:s}=(0,a.e)(),{date:i,readingTime:l}=s,o=(0,u.i)({day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return(0,r.jsxs)("div",{className:(0,n.A)(g.container,"margin-vert--md",t),children:[(0,r.jsx)(x,{date:i,formattedDate:(c=i,o.format(new Date(c)))}),void 0!==l&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(p,{}),(0,r.jsx)(h,{readingTime:l})]})]});var c}function b(e){return e.href?(0,r.jsx)(l.A,{...e}):(0,r.jsx)(r.Fragment,{children:e.children})}function f(e){let{author:t,className:s}=e;const{name:a,title:i,url:l,imageURL:o,email:c}=t,d=l||c&&`mailto:${c}`||void 0;return(0,r.jsxs)("div",{className:(0,n.A)("avatar margin-bottom--sm",s),children:[o&&(0,r.jsx)(b,{href:d,className:"avatar__photo-link",children:(0,r.jsx)("img",{className:"avatar__photo",src:o,alt:a})}),a&&(0,r.jsxs)("div",{className:"avatar__intro",children:[(0,r.jsx)("div",{className:"avatar__name",children:(0,r.jsx)(b,{href:d,children:(0,r.jsx)("span",{children:a})})}),i&&(0,r.jsx)("small",{className:"avatar__subtitle",children:i})]})]})}const v={authorCol:"authorCol_q4o9",imageOnlyAuthorRow:"imageOnlyAuthorRow_lXe7",imageOnlyAuthorCol:"imageOnlyAuthorCol_cxD5"};function A(e){let{className:t}=e;const{metadata:{authors:s},assets:i}=(0,a.e)();if(0===s.length)return null;const l=s.every((e=>{let{name:t}=e;return!t}));return(0,r.jsx)("div",{className:(0,n.A)("margin-top--md margin-bottom--sm",l?v.imageOnlyAuthorRow:"row",t),children:s.map(((e,t)=>(0,r.jsx)("div",{className:(0,n.A)(!l&&"col col--6",l?v.imageOnlyAuthorCol:v.authorCol),children:(0,r.jsx)(f,{author:{...e,imageURL:i.authorsImageUrls[t]??e.imageURL}})},t)))})}function N(){return(0,r.jsxs)("header",{children:[(0,r.jsx)(c,{}),(0,r.jsx)(j,{}),(0,r.jsx)(A,{})]})}var w=s(70440),T=s(72857);function _(e){let{children:t,className:s}=e;const{isBlogPostPage:i}=(0,a.e)();return(0,r.jsx)("div",{id:i?w.blogPostContainerID:void 0,className:(0,n.A)("markdown",s),children:(0,r.jsx)(T.A,{children:t})})}var P=s(17559),k=s(4336),y=s(62053);function I(){return(0,r.jsx)("b",{children:(0,r.jsx)(d.A,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read More"})})}function C(e){const{blogPostTitle:t,...s}=e;return(0,r.jsx)(l.A,{"aria-label":(0,d.T)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t}),...s,children:(0,r.jsx)(I,{})})}function L(){const{metadata:e,isBlogPostPage:t}=(0,a.e)(),{tags:s,title:i,editUrl:l,hasTruncateMarker:o,lastUpdatedBy:c,lastUpdatedAt:d}=e,m=!t&&o,u=s.length>0;if(!(u||m||l))return null;if(t){const e=!!(l||d||c);return(0,r.jsxs)("footer",{className:"docusaurus-mt-lg",children:[u&&(0,r.jsx)("div",{className:(0,n.A)("row","margin-top--sm",P.G.blog.blogFooterEditMetaRow),children:(0,r.jsx)("div",{className:"col",children:(0,r.jsx)(y.A,{tags:s})})}),e&&(0,r.jsx)(k.A,{className:(0,n.A)("margin-top--sm",P.G.blog.blogFooterEditMetaRow),editUrl:l,lastUpdatedAt:d,lastUpdatedBy:c})]})}return(0,r.jsxs)("footer",{className:"row docusaurus-mt-lg",children:[u&&(0,r.jsx)("div",{className:(0,n.A)("col",{"col--9":m}),children:(0,r.jsx)(y.A,{tags:s})}),m&&(0,r.jsx)("div",{className:(0,n.A)("col text--right",{"col--3":u}),children:(0,r.jsx)(C,{blogPostTitle:i,to:e.permalink})})]})}function M(e){let{children:t,className:s}=e;const l=function(){const{isBlogPostPage:e}=(0,a.e)();return e?void 0:"margin-bottom--xl"}(),{frontMatter:o}=(0,a.e)();return(0,r.jsxs)(i,{className:(0,n.A)(l,s),children:[(0,r.jsx)(N,{}),(0,r.jsx)("img",{src:o.image,alt:`Cover Image for ${o.title}`}),(0,r.jsx)(_,{children:t}),(0,r.jsx)(L,{})]})}},26334:(e,t,s)=>{s.d(t,{A:()=>i});var n=s(96540),a=s(21432),r=s(74848);function i(e){const[t,s]=(0,n.useState)(!1),i=(e=>{if(!e)return{};const t={},s=/(\w+)(?:="([^"]*)"|\s*)/g;let n;for(;null!==(n=s.exec(e));){const[,e,s]=n;t[e]=s||"true"}return t})(e.metastring);return(0,r.jsxs)("div",{className:"rounded-3xl overflow-hidden",children:[(0,r.jsxs)("div",{className:"bg-[#35353A] p-4 flex justify-between items-center",children:[(0,r.jsx)("span",{className:"text-white text-xs font-space-mono",children:i.title}),(0,r.jsx)("div",{className:"relative",children:(0,r.jsxs)("button",{onClick:()=>{navigator.clipboard.writeText(e.children?.toString()||""),s(!0),setTimeout((()=>s(!1)),2e3)},"aria-label":"Copy code",className:"flex flex-row items-center bg-transparent appearance-none border-none",children:[t&&(0,r.jsx)("span",{className:"text-xs text-white mr-2 opacity-70 font-space-mono p-0",style:{lineHeight:"0"},children:"Copied!"}),(0,r.jsx)("img",{src:"/icons/basic/copy-icon.svg",alt:"Copy Icon",className:"w-4 h-4 cursor-pointer hover:opacity-80 transition-opacity duration-150"})]})})]}),(0,r.jsx)(a.A,{...e})]})}}}]);
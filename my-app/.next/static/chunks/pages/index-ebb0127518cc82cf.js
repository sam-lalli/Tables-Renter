(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(3677)}])},3677:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return O}});var n=s(5893),a=s(7294),i=s(1163),l=s(4298),r=s.n(l),o=s(3454).env.NEXT_PUBLIC_GOOGLE_ADS_ID,c=s(3454).env.NEXT_PUBLIC_GOOGLE_ANALYTICS,d=function(){var e=(0,i.useRouter)();return(0,a.useEffect)((function(){var t=function(e){!function(e){window.gtag("config",c,{page_path:e})}(e)};return e.events.on("routeChangeComplete",t),function(){e.events.off("routeChangeComplete",t)}}),[e.events]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r(),{strategy:"afterInteractive",src:"https://www.googletagmanager.com/gtag/js?id=".concat(c)}),(0,n.jsx)(r(),{id:"gtag-init",strategy:"afterInteractive",dangerouslySetInnerHTML:{__html:"\n            window.dataLayer = window.dataLayer || [];\n            function gtag(){dataLayer.push(arguments);}\n            gtag('js', new Date());\n            gtag('config', '".concat(c,"', {\n              page_path: window.location.pathname,\n            });\n          ")}}),(0,n.jsx)(r(),{async:!0,src:o,crossOrigin:"anonymous"})]})},m=(0,a.createContext)({context:void 0}),u=function(){var e=(0,a.useState)(0),t=e[0],s=e[1],n=(0,a.useState)(0),i=n[0],l=n[1],r=(0,a.useCallback)((function(){s(window.innerWidth),l(window.innerHeight)}),[s,l]);return(0,a.useEffect)((function(){window.addEventListener("resize",r),r()}),[r]),{width:t,height:i}},x=s(603),h=s(1438),g=function e(t,s){var n=this;(0,h.Z)(this,e),this.draw=function(e,t,s,a){if(e.beginPath(),e.moveTo(0,s),!(n.waveLength.length<3)){for(var i=0;i<t;i++){var l,r,o,c,d=Math.sin(i*(null!==(r=null===(l=n)||void 0===l?void 0:l.waveLength[0])&&void 0!==r?r:0)-a),m=Math.sin(i*(null!==(o=n.waveLength[1])&&void 0!==o?o:0)-a),u=Math.sin(i*(null!==(c=n.waveLength[2])&&void 0!==c?c:0)-a);e.lineTo(2.5*i,s-400+d*m*u*200)}e.lineTo(t,s),e.fillStyle=n.color,e.fill(),e.closePath()}},this.waveLength=t,this.color=s},f=function(){var e=(0,a.useContext)(m).context,t=u().width,s=.013,n={frontWave:new g([.0211,.028,.015],"rgb(121, 169, 209, 0.1)"),backWave:new g([.0122,.018,.005],"rgb(103, 158, 203, 0.1)")},i=function(){null===e||void 0===e||e.clearRect(0,0,t,600),Object.entries(n).forEach((function(n){(0,x.Z)(n,2)[1].draw(e,t,600,s)})),s+=.013,requestAnimationFrame(i)};return e&&i(),null},p=function(){var e=(0,a.useRef)(null),t=u().width,s=(0,a.useState)(),i=s[0],l=s[1];return(0,a.useEffect)((function(){var t,s=null===e||void 0===e||null===(t=e.current)||void 0===t?void 0:t.getContext("2d");s&&l(s)}),[]),(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(m.Provider,{value:{context:i},children:[(0,n.jsx)("canvas",{id:"canvas",ref:e,width:t,height:220}),(0,n.jsx)(f,{})]})})},v=JSON.parse('{"S9":{"name":"Not your church\'s tables","logo":"/assets/images/logo-no-background.png"},"G":[{"name":"Products","href":"product"},{"name":"Pricing","href":"pricing"},{"name":"About","href":"about"}],"p":{"text":"Email us","href":"mailto:notyourchurchestables@gmail.com?subject=I need tables!"},"PL":{"title":"The days of running to the church","subtitle":"are over","description":"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.","img":"/assets/images/heroBanner.jpg","secondaryAction":{"text":"Book Now","href":"https://calendly.com/notyourchurchestables/tables-and-chair-rentals"}},"O7":{"title":"Chairs and tables fast","items":[{"title":"An easier way for table rental","description":"Just edit the config.json file with details about your company and voila your beautiful state of the art landing page is ready to go live! Remember to also update your assets, add any images you want to show to /assets/images and link them in the config.json","img":"/assets/images/tables.jpeg"},{"title":"Drop off and pick up made easy","description":"Play around with the theme.ts file and configure the color palette to match the branding of your company! If you\'re feeling wild, maybe change some tailwind css as well!","img":"/assets/images/trailer.jpeg"}]},"R2":{"title":"Chair and Table rental reimaged ","subtitle":"What makes us different","description":"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.","items":[{"name":"React.js","description":"React is a free and open-source front-end JavaScript library for building user interfaces or UI components.","icon":"/assets/images/icons8-running.gif","sicon":"/assets/images/icons8-running.png"},{"name":"Tailwind","description":"Tailwind CSS is a highly customizable, low-level CSS framework for quickly creating beautiful designs without any annoying opinionated stylesheet nonsense.","icon":"/assets/images/icons8-handshake.gif","sicon":"/assets/images/icons8-handshake.png"},{"name":"Next.js","description":"Next.js is a framework for server-rendered React applications using Next.js.","icon":"/assets/images/icons8-clock.gif","sicon":"/assets/images/icons8-clock.png"},{"name":"Typescript","description":"TypeScript is a programming language developed and maintained by Microsoft.","icon":"/assets/images/icons8-check.gif","sicon":"/assets/images/icons8-check.png"}]},"D":{"title":"Pricing","items":[{"name":"Chairs","price":"$1.50","priceDetails":"per chair/day","features":["Standard Lifetime folding chair","Model 80904G","Great chair","Max quanitity 200"]},{"name":"Packages","price":"$1000","priceDetails":"per event","features":["Great Idea","Another one","Give me more","4th one"]},{"name":"Tables","price":"$8","priceDetails":"per table/day","features":["70in Round tables","Seats 8-10 comfortably","Model 2673G","Max quantity 12"]}]}}'),b=function(){var e=v.R2,t=e.title,s=e.subtitle,i=e.description,l=e.items,r=(0,a.useState)(!1),o=r[0],c=r[1],d=function(){return c(!0)},m=function(){return c(!1)};return(0,n.jsx)("div",{className:"py-12 bg-background",id:"features",children:(0,n.jsxs)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[(0,n.jsxs)("div",{className:"lg:text-center",children:[(0,n.jsx)("h2",{className:"text-base text-primary font-semibold tracking-wide uppercase",children:t}),(0,n.jsx)("p",{className:"mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl",children:s}),(0,n.jsx)("p",{className:"mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto",children:i})]}),(0,n.jsx)("div",{className:"mt-10",children:(0,n.jsx)("dl",{className:"space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10",children:l.map((function(e){return(0,n.jsxs)("div",{className:"relative",onMouseEnter:d,onMouseLeave:m,children:[(0,n.jsxs)("dt",{children:[(0,n.jsx)("div",{className:"absolute flex items-center justify-center h-12 w-12 rounded-md bg-background text-tertiary border-primary border-4",children:o?(0,n.jsx)("img",{className:"inline-block h-6 w-6 rounded-full",src:e.icon,alt:e.name}):(0,n.jsx)("img",{className:"inline-block h-6 w-6 rounded-full",src:e.sicon,alt:e.name})}),(0,n.jsx)("p",{className:"ml-16 text-lg leading-6 font-medium text-gray-900",children:e.name})]}),(0,n.jsx)("dd",{className:"mt-2 ml-16 text-base text-gray-500",children:e.description})]},e.name)}))})})]})})},j=s(1203),y=s(5685),w=s(3801),N=s(6261),k=function(){var e=v.G,t=v.S9,s=v.p,i=t.name,l=t.logo;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("svg",{className:"hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-background transform translate-x-1/2",fill:"currentColor",viewBox:"0 0 100 100",preserveAspectRatio:"none","aria-hidden":"true",children:(0,n.jsx)("polygon",{points:"50,0 100,0 50,100 0,100"})}),(0,n.jsxs)(j.J,{children:[(0,n.jsx)("div",{className:"relative pt-6 px-4 sm:px-6 lg:px-8",children:(0,n.jsxs)("nav",{className:"relative flex items-center justify-between sm:h-10 lg:justify-start","aria-label":"Global",children:[(0,n.jsx)("div",{className:"flex items-center flex-grow flex-shrink-0 lg:flex-grow-0",children:(0,n.jsxs)("div",{className:"flex items-center justify-between w-full md:w-auto",children:[(0,n.jsxs)("a",{href:"#",children:[(0,n.jsx)("span",{className:"sr-only",children:i}),(0,n.jsx)("img",{alt:"logo",className:"h-10 w-114 sm:h-8",src:l})]}),(0,n.jsx)("div",{className:"-mr-2 flex items-center md:hidden",children:(0,n.jsxs)(j.J.Button,{className:"bg-background rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary",children:[(0,n.jsx)("span",{className:"sr-only",children:"Open main menu"}),(0,n.jsx)(w.Oqj,{className:"h-6 w-6","aria-hidden":"true"})]})})]})}),(0,n.jsxs)("div",{className:"hidden md:block md:ml-10 md:pr-4 md:space-x-8",children:[e.map((function(e){return(0,n.jsx)(N.rU,{spy:!0,active:"active",smooth:!0,duration:2e3,to:e.href,className:"font-medium text-gray-500 hover:text-gray-900",children:e.name},e.name)})),(0,n.jsx)("a",{href:"mailto:notyourchurchestables@gmail.com?subject=I need tables!",className:"font-medium text-primary hover:text-[#59544B]",children:"Email us!"})]})]})}),(0,n.jsx)(y.u,{as:a.Fragment,enter:"duration-150 ease-in-out",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"duration-100 ease-in",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:(0,n.jsx)(j.J.Panel,{focus:!0,className:"absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden",children:(0,n.jsxs)("div",{className:"rounded-lg shadow-md bg-background ring-1 ring-black ring-opacity-5 overflow-hidden",children:[(0,n.jsxs)("div",{className:"px-5 pt-4 flex items-center justify-between",children:[(0,n.jsx)("div",{children:(0,n.jsx)("img",{className:"h-8 w-auto",src:l,alt:""})}),(0,n.jsx)("div",{className:"-mr-2",children:(0,n.jsxs)(j.J.Button,{className:"bg-background rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary",children:[(0,n.jsx)("span",{className:"sr-only",children:"Close main menu"}),(0,n.jsx)(w.b0D,{className:"h-6 w-6","aria-hidden":"true"})]})})]}),(0,n.jsx)("div",{className:"px-2 pt-2 pb-3 space-y-1",children:e.map((function(e){return(0,n.jsx)(N.rU,{spy:!0,active:"active",smooth:!0,duration:1e3,to:e.href,className:"block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50",children:e.name},e.name)}))}),(0,n.jsx)("a",{href:s.href,className:"block w-full px-5 py-3 text-center font-medium text-primary bg-gray-50 hover:bg-gray-100",children:s.text})]})})})]})]})},_=s(6513),C=s(2688);var E=function(e){var t=e.children,s=(0,_._)(),i=(0,a.useRef)(null),l=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"0px",s=(0,a.useState)(!1),n=s[0],i=s[1];return(0,a.useEffect)((function(){var s=null,n=new IntersectionObserver((function(e){var t=(0,x.Z)(e,1)[0];(null===t||void 0===t?void 0:t.isIntersecting)&&i(null===t||void 0===t?void 0:t.isIntersecting)}),{rootMargin:t});return e&&(null===e||void 0===e?void 0:e.current)&&(s=e.current,n.observe(s)),function(){n.unobserve(s)}}),[e,t]),n}(i);return(0,a.useEffect)((function(){l&&s.start({x:0,opacity:1,transition:{duration:.5,ease:"easeOut"}})}),[l,s]),(0,n.jsx)(C.E.div,{className:"lazy-div",ref:i,initial:{opacity:0,x:-50},animate:s,children:t})},L=function(){var e=v.PL;return(0,n.jsx)("main",{className:"mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28",children:(0,n.jsxs)("div",{className:"sm:text-center lg:text-left",children:[(0,n.jsxs)("h1",{className:"text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl",children:[(0,n.jsx)("span",{className:"block xl:inline",children:e.title})," ",(0,n.jsx)("span",{className:"block text-primary xl:inline",children:e.subtitle})]}),(0,n.jsx)("p",{className:"mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0",children:e.description}),(0,n.jsx)("div",{className:"mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start",children:(0,n.jsx)("div",{className:"rounded-md shadow",children:(0,n.jsx)("a",{href:e.secondaryAction.href,className:"w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-background bg-primary hover:bg-[#59544B] hover:text-primary md:py-4 md:text-lg md:px-10",children:e.secondaryAction.text})})})]})})},S=function(){var e=v.PL;return(0,n.jsx)("div",{className:"lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2",children:(0,n.jsx)("img",{className:"h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full",src:e.img,alt:"happy team image"})})},T=function(){var e=v.D,t=e.items,s=e.title,a=(0,x.Z)(t,3),i=a[0],l=a[1],r=a[2];return(0,n.jsx)("section",{className:"bg-background py-8",id:"pricing",children:(0,n.jsxs)("div",{className:"container mx-auto px-2 pt-4 pb-12 text-primary",children:[(0,n.jsx)("h1",{className:"w-full my-2 text-5xl font-bold leading-tight text-center text-primary",children:s}),(0,n.jsx)("div",{className:"w-full mb-4",children:(0,n.jsx)("div",{className:"h-1 mx-auto bg-primary w-64 opacity-25 my-0 py-0 rounded-t"})}),(0,n.jsxs)("div",{className:"flex flex-col sm:flex-row justify-center pt-12 my-12 sm:my-4",children:[(0,n.jsxs)("div",{className:"flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-background mt-4",children:[(0,n.jsxs)("div",{className:"flex-1 bg-background text-gray-600 rounded-t rounded-b-none overflow-hidden shadow",children:[(0,n.jsx)("div",{className:"p-8 text-3xl font-bold text-center border-b-4",children:null===i||void 0===i?void 0:i.name}),(0,n.jsx)("ul",{className:"w-full text-center text-sm",children:null===i||void 0===i?void 0:i.features.map((function(e){return(0,n.jsx)("li",{className:"border-b py-4",children:e},"".concat(i.name,"-").concat(e))}))})]}),(0,n.jsx)("div",{className:"flex-none mt-auto bg-background rounded-b rounded-t-none overflow-hidden shadow p-6",children:(0,n.jsxs)("div",{className:"w-full pt-6 text-3xl text-gray-600 font-bold text-center",children:[null===i||void 0===i?void 0:i.price,(0,n.jsxs)("span",{className:"text-base",children:[" ",null===i||void 0===i?void 0:i.priceDetails]})]})})]}),(0,n.jsxs)("div",{className:"flex flex-col w-5/6 lg:w-1/3 mx-auto lg:mx-0 rounded-lg bg-background mt-4 sm:-mt-6 shadow-lg z-10",children:[(0,n.jsxs)("div",{className:"flex-1 bg-background rounded-t rounded-b-none overflow-hidden shadow",children:[(0,n.jsx)("div",{className:"w-full p-8 text-3xl font-bold text-center",children:null===l||void 0===l?void 0:l.name}),(0,n.jsx)("div",{className:"h-1 w-full bg-primary my-0 py-0 rounded-t"}),(0,n.jsx)("ul",{className:"w-full text-center text-base font-bold",children:null===l||void 0===l?void 0:l.features.map((function(e){return(0,n.jsx)("li",{className:"border-b py-4",children:e},"".concat(null===l||void 0===l?void 0:l.name,"-").concat(e))}))})]}),(0,n.jsx)("div",{className:"flex-none mt-auto bg-background rounded-b rounded-t-none overflow-hidden shadow p-6",children:(0,n.jsxs)("div",{className:"w-full pt-6 text-4xl font-bold text-center",children:[null===l||void 0===l?void 0:l.price,(0,n.jsxs)("span",{className:"text-base",children:[" ",null===l||void 0===l?void 0:l.priceDetails]})]})})]}),(0,n.jsxs)("div",{className:"flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-primary mt-4",children:[(0,n.jsxs)("div",{className:"flex-1 bg-background text-gray-600 rounded-t rounded-b-none overflow-hidden shadow",children:[(0,n.jsx)("div",{className:"p-8 text-3xl font-bold text-center border-b-4",children:null===r||void 0===r?void 0:r.name}),(0,n.jsx)("ul",{className:"w-full text-center text-sm",children:null===r||void 0===r?void 0:r.features.map((function(e){return(0,n.jsx)("li",{className:"border-b py-4",children:e},"".concat(null===r||void 0===r?void 0:r.name,"-").concat(e))}))})]}),(0,n.jsx)("div",{className:"flex-none mt-auto bg-background rounded-b rounded-t-none overflow-hidden shadow p-6",children:(0,n.jsxs)("div",{className:"w-full pt-6 text-3xl text-gray-600 font-bold text-center",children:[null===r||void 0===r?void 0:r.price,(0,n.jsxs)("span",{className:"text-base",children:[" ",null===r||void 0===r?void 0:r.priceDetails]})]})})]})]})]})})},I=function(e){var t=e.width,s=void 0===t?"w-64":t;return(0,n.jsx)("div",{className:"w-full mb-4",children:(0,n.jsx)("div",{className:"h-1 mx-auto bg-primary ".concat(s," opacity-25 my-0 py-0 rounded-t mb-10")})})},P=function(){var e=v.O7,t=(0,x.Z)(e.items,2),s=t[0],a=t[1];return(0,n.jsx)("section",{className:"bg-background py-8",id:"product",children:(0,n.jsxs)("div",{className:"container max-w-5xl mx-auto m-8",children:[(0,n.jsx)("h1",{className:"w-full my-2 text-5xl font-bold leading-tight text-center text-primary",children:e.title.split(" ").map((function(e,t){return(0,n.jsxs)("span",{className:t%2?"text-border":"text-primary",children:[e," "]},t)}))}),(0,n.jsx)(I,{}),(0,n.jsxs)("div",{className:"flex flex-wrap",children:[(0,n.jsxs)("div",{className:"w-5/6 sm:w-1/2 p-6 mt-20",children:[(0,n.jsx)("h3",{className:"text-3xl text-gray-800 font-bold leading-none mb-3",children:null===s||void 0===s?void 0:s.title}),(0,n.jsx)("p",{className:"text-gray-600",children:null===s||void 0===s?void 0:s.description})]}),(0,n.jsx)("div",{className:"w-full sm:w-1/2 p-6",children:(0,n.jsx)("img",{className:"h-6/6 rounded-lg",src:null===s||void 0===s?void 0:s.img,alt:null===s||void 0===s?void 0:s.title})})]}),(0,n.jsxs)("div",{className:"flex flex-wrap flex-col-reverse sm:flex-row",children:[(0,n.jsx)("div",{className:"w-full sm:w-1/2 p-6",children:(0,n.jsx)("img",{className:"h-6/6 rounded-lg",src:null===a||void 0===a?void 0:a.img,alt:null===a||void 0===a?void 0:a.title})}),(0,n.jsx)("div",{className:"w-full sm:w-1/2 p-6 mt-20",children:(0,n.jsxs)("div",{className:"align-middle",children:[(0,n.jsx)("h3",{className:"text-3xl text-gray-800 font-bold leading-none mb-3",children:null===a||void 0===a?void 0:a.title}),(0,n.jsx)("p",{className:"text-gray-600 mb-8",children:null===a||void 0===a?void 0:a.description})]})})]})]})})},O=function(){return(0,n.jsxs)("div",{className:"bg-background grid gap-y-16 overflow-hidden",children:[(0,n.jsxs)("div",{className:"relative bg-background",children:[(0,n.jsx)("div",{className:"max-w-7xl mx-auto",children:(0,n.jsxs)("div",{className:"relative z-10 pb-8 bg-background sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32",children:[(0,n.jsx)(k,{}),(0,n.jsx)(L,{})]})}),(0,n.jsx)(S,{})]}),(0,n.jsx)(p,{}),(0,n.jsx)(E,{children:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(P,{}),(0,n.jsx)(p,{})]})}),(0,n.jsx)(E,{children:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(b,{}),(0,n.jsx)(p,{})]})}),(0,n.jsx)(E,{children:(0,n.jsx)(T,{})}),(0,n.jsx)(E,{children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(p,{})})}),(0,n.jsx)(d,{})]})}}},function(e){e.O(0,[854,774,888,179],(function(){return t=8312,e(e.s=t);var t}));var t=e.O();_N_E=t}]);
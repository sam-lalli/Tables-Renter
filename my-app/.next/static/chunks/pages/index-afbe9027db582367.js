(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(3677)}])},3677:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return O}});var s=t(5893),a=t(7294),l=t(1163),i=t(4298),r=t.n(i),o=t(3454).env.NEXT_PUBLIC_GOOGLE_ADS_ID,d=t(3454).env.NEXT_PUBLIC_GOOGLE_ANALYTICS,c=function(){var e=(0,l.useRouter)();return(0,a.useEffect)((function(){var n=function(e){!function(e){window.gtag("config",d,{page_path:e})}(e)};return e.events.on("routeChangeComplete",n),function(){e.events.off("routeChangeComplete",n)}}),[e.events]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r(),{strategy:"afterInteractive",src:"https://www.googletagmanager.com/gtag/js?id=".concat(d)}),(0,s.jsx)(r(),{id:"gtag-init",strategy:"afterInteractive",dangerouslySetInnerHTML:{__html:"\n            window.dataLayer = window.dataLayer || [];\n            function gtag(){dataLayer.push(arguments);}\n            gtag('js', new Date());\n            gtag('config', '".concat(d,"', {\n              page_path: window.location.pathname,\n            });\n          ")}}),(0,s.jsx)(r(),{async:!0,src:o,crossOrigin:"anonymous"})]})},u=(0,a.createContext)({context:void 0}),m=function(){var e=(0,a.useState)(0),n=e[0],t=e[1],s=(0,a.useState)(0),l=s[0],i=s[1],r=(0,a.useCallback)((function(){t(window.innerWidth),i(window.innerHeight)}),[t,i]);return(0,a.useEffect)((function(){window.addEventListener("resize",r),r()}),[r]),{width:n,height:l}},x=t(603),h=t(1438),g=function e(n,t){var s=this;(0,h.Z)(this,e),this.draw=function(e,n,t,a){if(e.beginPath(),e.moveTo(0,t),!(s.waveLength.length<3)){for(var l=0;l<n;l++){var i,r,o,d,c=Math.sin(l*(null!==(r=null===(i=s)||void 0===i?void 0:i.waveLength[0])&&void 0!==r?r:0)-a),u=Math.sin(l*(null!==(o=s.waveLength[1])&&void 0!==o?o:0)-a),m=Math.sin(l*(null!==(d=s.waveLength[2])&&void 0!==d?d:0)-a);e.lineTo(2.5*l,t-400+c*u*m*200)}e.lineTo(n,t),e.fillStyle=s.color,e.fill(),e.closePath()}},this.waveLength=n,this.color=t},f=function(){var e=(0,a.useContext)(u).context,n=m().width,t=.013,s={frontWave:new g([.0211,.028,.015],"rgb(121, 169, 209, 0.1)"),backWave:new g([.0122,.018,.005],"rgb(103, 158, 203, 0.1)")},l=function(){null===e||void 0===e||e.clearRect(0,0,n,600),Object.entries(s).forEach((function(s){(0,x.Z)(s,2)[1].draw(e,n,600,t)})),t+=.013,requestAnimationFrame(l)};return e&&l(),null},v=function(){var e=(0,a.useRef)(null),n=m().width,t=(0,a.useState)(),l=t[0],i=t[1];return(0,a.useEffect)((function(){var n,t=null===e||void 0===e||null===(n=e.current)||void 0===n?void 0:n.getContext("2d");t&&i(t)}),[]),(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(u.Provider,{value:{context:l},children:[(0,s.jsx)("canvas",{id:"canvas",ref:e,width:n,height:220}),(0,s.jsx)(f,{})]})})},p=JSON.parse('{"S9":{"name":"Not your church\'s tables","logo":"/assets/images/logo-no-background.png"},"G":[{"name":"Products","href":"product"},{"name":"Pricing","href":"pricing"},{"name":"About","href":"features"}],"p":{"text":"Email us","href":"mailto:notyourchurchestables@gmail.com?subject=I need tables!"},"PL":{"title":"The days of running to the church","subtitle":"are over","description":"Since the great awakening, we have needed a hero. Someone to save us from running to our local church for our table and chair needs. The condition or quality of these items, unknown. Who was the last to use them? You will never know.","img":"/assets/images/churchChair3.jpg","secondaryAction":{"text":"Book Now","href":"https://calendly.com/notyourchurchestables/tables-and-chair-rentals"}},"O7":{"title":"Chairs and tables fast","items":[{"title":"An easier way for table rental","description":"Imagine planning an event knowning the little things like tables and chairs are taken care of. Simply snap your fingers for exactly what you need, quality you can trust from the most reliable source.","img":"/assets/images/tables.jpeg"},{"title":"Drop off and pick up made easy","description":"No need to ask your neighbor for thier truck. With our simple drop off and pickup times you don\'t need to move a muscle. No room for our trailer, with an additional fee it will be like they came out of thin air","img":"/assets/images/trailer.jpeg"}]},"R2":{"title":"Chair and Table rental reimaged ","subtitle":"What makes us different","description":"Locally run and reliable we are here to solve one of life\'s greatest issues. Where do I get the table and chairs for my event? Wedding, family reunion, block party, you name it. We\'ll be there!","items":[{"name":"Quick Delivery","description":"Servicing anywhere along the wasatch front as soon as next day.","icon":"/assets/images/icons8-running.gif","sicon":"/assets/images/icons8-running.png"},{"name":"Easy Agreement","description":"Just tell us what you need, when you need it. Full control of your event","icon":"/assets/images/icons8-handshake.gif","sicon":"/assets/images/icons8-handshake.png"},{"name":"Time Saver","description":"No need to ask the neighbor for their truck. No need to scramble to the chruch for those table and chairs","icon":"/assets/images/icons8-clock.gif","sicon":"/assets/images/icons8-clock.png"},{"name":"Worry Free","description":"Let us take the worry of the little things so you can focus on the big picture","icon":"/assets/images/icons8-check.gif","sicon":"/assets/images/icons8-check.png"}]},"D":{"title":"Pricing","items":[{"name":"Chairs","price":"$1.50","priceDetails":"per chair/day","features":["Standard Lifetime folding chair","Model 80904G","Great chair","Max quanitity 200"]},{"name":"Packages","price":"$1000","priceDetails":"per event","features":["Weddings","Family reunions","Farewell / Homecoming","Baby shower"]},{"name":"Tables","price":"$8","priceDetails":"per table/day","features":["72in Round tables","Seats 8-10 comfortably","Model 2673G","Max quantity 12"]},{"name":"Extras","price":"$8-$12","priceDetails":"","features":["Tables Cloths","Seats 8-10 comfortably","Model 2673G","Max quantity 12"]}]}}'),b=function(){var e=p.R2,n=e.title,t=e.subtitle,a=e.description,l=e.items;return(0,s.jsx)("div",{className:"py-12 bg-background",id:"features",children:(0,s.jsxs)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[(0,s.jsxs)("div",{className:"lg:text-center",children:[(0,s.jsx)("h2",{className:"text-base text-primary font-semibold tracking-wide uppercase",children:n}),(0,s.jsx)("p",{className:"mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl",children:t}),(0,s.jsx)("p",{className:"mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto",children:a})]}),(0,s.jsx)("div",{className:"mt-10",children:(0,s.jsx)("dl",{className:"space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10",children:l.map((function(e){return(0,s.jsxs)("div",{className:"relative",children:[(0,s.jsxs)("dt",{children:[(0,s.jsx)("div",{className:"absolute flex items-center justify-center h-12 w-12 rounded-md bg-background text-tertiary border-primary border-4",children:(0,s.jsx)("img",{className:"inline-block h-6 w-6 rounded-full",src:e.sicon,alt:e.name})}),(0,s.jsx)("p",{className:"ml-16 text-lg leading-6 font-medium text-gray-900",children:e.name})]}),(0,s.jsx)("dd",{className:"mt-2 ml-16 text-base text-gray-500",children:e.description})]},e.name)}))})})]})})},j=t(1203),w=t(5685),y=t(3801),N=t(6261),k=function(){var e=p.G,n=p.S9,t=p.p,l=n.name,i=n.logo;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("svg",{className:"hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-background transform translate-x-1/2",fill:"currentColor",viewBox:"0 0 100 100",preserveAspectRatio:"none","aria-hidden":"true",children:(0,s.jsx)("polygon",{points:"50,0 100,0 50,100 0,100"})}),(0,s.jsxs)(j.J,{children:[(0,s.jsx)("div",{className:"relative pt-6 px-4 sm:px-6 lg:px-8",children:(0,s.jsxs)("nav",{className:"relative flex items-center justify-between sm:h-10 lg:justify-start","aria-label":"Global",children:[(0,s.jsx)("div",{className:"flex items-center flex-grow flex-shrink-0 lg:flex-grow-0",children:(0,s.jsxs)("div",{className:"flex items-center justify-between w-full md:w-auto",children:[(0,s.jsxs)("a",{href:"#",children:[(0,s.jsx)("span",{className:"sr-only",children:l}),(0,s.jsx)("img",{alt:"logo",className:"h-10 w-114 sm:h-8",src:i})]}),(0,s.jsx)("div",{className:"-mr-2 flex items-center md:hidden",children:(0,s.jsxs)(j.J.Button,{className:"bg-background rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary",children:[(0,s.jsx)("span",{className:"sr-only",children:"Open main menu"}),(0,s.jsx)(y.Oqj,{className:"h-6 w-6","aria-hidden":"true"})]})})]})}),(0,s.jsxs)("div",{className:"hidden md:block md:ml-10 md:pr-4 md:space-x-8",children:[e.map((function(e){return(0,s.jsx)(N.rU,{spy:!0,active:"active",smooth:!0,duration:2e3,to:e.href,className:"font-medium text-gray-500 hover:text-gray-900",children:e.name},e.name)})),(0,s.jsx)("a",{href:"mailto:notyourchurchestables@gmail.com?subject=I need tables!",className:"font-medium text-primary hover:text-[#59544B]",children:"Email us!"})]})]})}),(0,s.jsx)(w.u,{as:a.Fragment,enter:"duration-150 ease-in-out",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"duration-100 ease-in",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:(0,s.jsx)(j.J.Panel,{focus:!0,className:"absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden",children:(0,s.jsxs)("div",{className:"rounded-lg shadow-md bg-background ring-1 ring-black ring-opacity-5 overflow-hidden",children:[(0,s.jsxs)("div",{className:"px-5 pt-4 flex items-center justify-between",children:[(0,s.jsx)("div",{children:(0,s.jsx)("img",{className:"h-8 w-auto",src:i,alt:""})}),(0,s.jsx)("div",{className:"-mr-2",children:(0,s.jsxs)(j.J.Button,{className:"bg-background rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary",children:[(0,s.jsx)("span",{className:"sr-only",children:"Close main menu"}),(0,s.jsx)(y.b0D,{className:"h-6 w-6","aria-hidden":"true"})]})})]}),(0,s.jsx)("div",{className:"px-2 pt-2 pb-3 space-y-1",children:e.map((function(e){return(0,s.jsx)(N.rU,{spy:!0,active:"active",smooth:!0,duration:1e3,to:e.href,className:"block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50",children:e.name},e.name)}))}),(0,s.jsx)("a",{href:t.href,className:"block w-full px-5 py-3 text-center font-medium text-primary bg-gray-50 hover:bg-gray-100",children:t.text})]})})})]})]})},E=t(6513),L=t(2688);var _=function(e){var n=e.children,t=(0,E._)(),l=(0,a.useRef)(null),i=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"0px",t=(0,a.useState)(!1),s=t[0],l=t[1];return(0,a.useEffect)((function(){var t=null,s=new IntersectionObserver((function(e){var n=(0,x.Z)(e,1)[0];(null===n||void 0===n?void 0:n.isIntersecting)&&l(null===n||void 0===n?void 0:n.isIntersecting)}),{rootMargin:n});return e&&(null===e||void 0===e?void 0:e.current)&&(t=e.current,s.observe(t)),function(){s.unobserve(t)}}),[e,n]),s}(l);return(0,a.useEffect)((function(){i&&t.start({x:0,opacity:1,transition:{duration:.5,ease:"easeOut"}})}),[i,t]),(0,s.jsx)(L.E.div,{className:"lazy-div",ref:l,initial:{opacity:0,x:-50},animate:t,children:n})},M=function(){var e=p.PL;return(0,s.jsx)("main",{className:"mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28",children:(0,s.jsxs)("div",{className:"sm:text-center lg:text-left",children:[(0,s.jsxs)("h1",{className:"text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl",children:[(0,s.jsx)("span",{className:"block xl:inline",children:e.title})," ",(0,s.jsx)("span",{className:"block text-primary xl:inline",children:e.subtitle})]}),(0,s.jsx)("p",{className:"mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0",children:e.description}),(0,s.jsx)("div",{className:"mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start",children:(0,s.jsx)("div",{className:"rounded-md shadow",children:(0,s.jsx)("a",{href:e.secondaryAction.href,className:"w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-background bg-primary hover:bg-[#59544B] hover:text-primary md:py-4 md:text-lg md:px-10",children:e.secondaryAction.text})})})]})})},S=function(){var e=p.PL;return(0,s.jsx)("div",{className:"lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2",children:(0,s.jsx)("img",{className:"h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full",src:e.img,alt:"old church chairs"})})},C=function(){var e=p.D,n=e.items,t=e.title,l=(0,x.Z)(n,3),i=l[0],r=l[1],o=l[2],d=(0,a.useState)(!1),c=d[0],u=d[1],m=(0,a.useState)(!1),h=m[0],g=m[1],f=(0,a.useState)(!1),v=f[0],b=f[1],j=function(){return u(!0)},w=function(){return u(!1)},y=function(){return g(!0)},N=function(){return g(!1)},k=function(){return b(!0)},E=function(){return b(!1)};return(0,s.jsx)("section",{className:"bg-background py-8",id:"pricing",children:(0,s.jsxs)("div",{className:"container mx-auto px-2 pt-4 pb-12 text-primary",children:[(0,s.jsx)("h1",{className:"w-full my-2 text-5xl font-bold leading-tight text-center text-primary",children:t}),(0,s.jsx)("div",{className:"w-full mb-4",children:(0,s.jsx)("div",{className:"h-1 mx-auto bg-primary w-64 opacity-25 my-0 py-0 rounded-t"})}),(0,s.jsxs)("div",{className:"flex flex-col sm:flex-row justify-center pt-12 my-12 sm:my-4",children:[c?(0,s.jsxs)("div",{className:"flex flex-col w-5/6 lg:w-1/3 mx-auto lg:mx-0 rounded-lg bg-background mt-4 sm:-mt-6 shadow-lg z-1",onMouseEnter:j,onMouseLeave:w,children:[(0,s.jsxs)("div",{className:"flex-1 bg-background rounded-t rounded-b-none overflow-hidden shadow z-10",children:[(0,s.jsx)("div",{className:"w-full p-8 text-3xl font-bold text-center",children:null===i||void 0===i?void 0:i.name}),(0,s.jsx)("div",{className:"h-1 w-full bg-primary my-0 py-0 rounded-t",children:" "}),(0,s.jsx)("ul",{className:"w-full text-center text-base font-bold",children:null===i||void 0===i?void 0:i.features.map((function(e){return(0,s.jsx)("li",{className:"border-b py-4",children:e},"".concat(null===i||void 0===i?void 0:i.name,"-").concat(e))}))})]}),(0,s.jsx)("div",{className:"flex-none mt-auto bg-background rounded-b rounded-t-none overflow-hidden shadow p-6",children:(0,s.jsxs)("div",{className:"w-full pt-6 text-4xl font-bold text-center",children:[null===i||void 0===i?void 0:i.price,(0,s.jsxs)("span",{className:"text-base",children:[" ",null===i||void 0===i?void 0:i.priceDetails]})]})})]}):(0,s.jsxs)("div",{className:"flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-background mt-4",onMouseEnter:j,onMouseLeave:w,children:[(0,s.jsxs)("div",{className:"flex-1 bg-background text-gray-600 rounded-t rounded-b-none overflow-hidden shadow",children:[(0,s.jsx)("div",{className:"p-8 text-3xl font-bold text-center border-b-4",children:null===i||void 0===i?void 0:i.name}),(0,s.jsx)("ul",{className:"w-full text-center text-sm",children:null===i||void 0===i?void 0:i.features.map((function(e){return(0,s.jsx)("li",{className:"border-b py-4",children:e},"".concat(null===i||void 0===i?void 0:i.name,"-").concat(e))}))})]}),(0,s.jsx)("div",{className:"flex-none mt-auto bg-background rounded-b rounded-t-none overflow-hidden shadow p-6",children:(0,s.jsxs)("div",{className:"w-full pt-6 text-3xl text-gray-600 font-bold text-center ",children:[null===i||void 0===i?void 0:i.price,(0,s.jsxs)("span",{className:"text-base",children:[" ",null===i||void 0===i?void 0:i.priceDetails]})]})})]}),h?(0,s.jsxs)("div",{className:"flex flex-col w-5/6 lg:w-1/3 mx-auto lg:mx-0 rounded-lg bg-background mt-4 sm:-mt-6 shadow-lg z-10",onMouseEnter:y,onMouseLeave:N,children:[(0,s.jsxs)("div",{className:"flex-1 bg-background rounded-t rounded-b-none overflow-hidden shadow",children:[(0,s.jsx)("div",{className:"w-full p-8 text-3xl font-bold text-center",children:null===r||void 0===r?void 0:r.name}),(0,s.jsx)("div",{className:"h-1 w-full bg-primary my-0 py-0 rounded-t",children:" "}),(0,s.jsx)("ul",{className:"w-full text-center text-base font-bold",children:null===r||void 0===r?void 0:r.features.map((function(e){return(0,s.jsx)("li",{className:"border-b py-4",children:e},"".concat(null===r||void 0===r?void 0:r.name,"-").concat(e))}))})]}),(0,s.jsx)("div",{className:"flex-none mt-auto bg-background rounded-b rounded-t-none overflow-hidden shadow p-6",children:(0,s.jsxs)("div",{className:"w-full pt-6 text-4xl font-bold text-center",children:[null===r||void 0===r?void 0:r.price,(0,s.jsxs)("span",{className:"text-base",children:[" ",null===r||void 0===r?void 0:r.priceDetails]})]})})]}):(0,s.jsxs)("div",{className:"flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-background mt-4",onMouseEnter:y,onMouseLeave:N,children:[(0,s.jsxs)("div",{className:"flex-1 bg-background text-gray-600 rounded-t rounded-b-none overflow-hidden shadow",children:[(0,s.jsx)("div",{className:"p-8 text-3xl font-bold text-center border-b-4",children:null===r||void 0===r?void 0:r.name}),(0,s.jsx)("ul",{className:"w-full text-center text-sm",children:null===r||void 0===r?void 0:r.features.map((function(e){return(0,s.jsx)("li",{className:"border-b py-4",children:e},"".concat(null===r||void 0===r?void 0:r.name,"-").concat(e))}))})]}),(0,s.jsx)("div",{className:"flex-none mt-auto bg-background rounded-b rounded-t-none overflow-hidden shadow p-6",children:(0,s.jsxs)("div",{className:"w-full pt-6 text-3xl text-gray-600 font-bold text-center ",children:[null===r||void 0===r?void 0:r.price,(0,s.jsxs)("span",{className:"text-base",children:[" ",null===r||void 0===r?void 0:r.priceDetails]})]})})]}),v?(0,s.jsxs)("div",{className:"flex flex-col w-5/6 lg:w-1/3 mx-auto lg:mx-0 rounded-lg bg-background mt-4 sm:-mt-6 shadow-lg z-10",onMouseEnter:k,onMouseLeave:E,children:[(0,s.jsxs)("div",{className:"flex-1 bg-background rounded-t rounded-b-none overflow-hidden shadow",children:[(0,s.jsx)("div",{className:"w-full p-8 text-3xl font-bold text-center",children:null===o||void 0===o?void 0:o.name}),(0,s.jsx)("div",{className:"h-1 w-full bg-primary my-0 py-0 rounded-t",children:" "}),(0,s.jsx)("ul",{className:"w-full text-center text-base font-bold",children:null===o||void 0===o?void 0:o.features.map((function(e){return(0,s.jsx)("li",{className:"border-b py-4",children:e},"".concat(null===o||void 0===o?void 0:o.name,"-").concat(e))}))})]}),(0,s.jsx)("div",{className:"flex-none mt-auto bg-background rounded-b rounded-t-none overflow-hidden shadow p-6",children:(0,s.jsxs)("div",{className:"w-full pt-6 text-4xl font-bold text-center",children:[null===o||void 0===o?void 0:o.price,(0,s.jsxs)("span",{className:"text-base",children:[" ",null===o||void 0===o?void 0:o.priceDetails]})]})})]}):(0,s.jsxs)("div",{className:"flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-background mt-4",onMouseEnter:k,onMouseLeave:E,children:[(0,s.jsxs)("div",{className:"flex-1 bg-background text-gray-600 rounded-t rounded-b-none overflow-hidden shadow",children:[(0,s.jsx)("div",{className:"p-8 text-3xl font-bold text-center border-b-4",children:null===o||void 0===o?void 0:o.name}),(0,s.jsx)("ul",{className:"w-full text-center text-sm",children:null===o||void 0===o?void 0:o.features.map((function(e){return(0,s.jsx)("li",{className:"border-b py-4",children:e},"".concat(null===o||void 0===o?void 0:o.name,"-").concat(e))}))})]}),(0,s.jsx)("div",{className:"flex-none mt-auto bg-background rounded-b rounded-t-none overflow-hidden shadow p-6",children:(0,s.jsxs)("div",{className:"w-full pt-6 text-3xl text-gray-600 font-bold text-center ",children:[null===o||void 0===o?void 0:o.price,(0,s.jsxs)("span",{className:"text-base",children:[" ",null===o||void 0===o?void 0:o.priceDetails]})]})})]})]})]})})},D=function(e){var n=e.width,t=void 0===n?"w-64":n;return(0,s.jsx)("div",{className:"w-full mb-4",children:(0,s.jsx)("div",{className:"h-1 mx-auto bg-primary ".concat(t," opacity-25 my-0 py-0 rounded-t mb-10")})})},T=function(){var e=p.O7,n=(0,x.Z)(e.items,2),t=n[0],a=n[1];return(0,s.jsx)("section",{className:"bg-background py-8",id:"product",children:(0,s.jsxs)("div",{className:"container max-w-5xl mx-auto m-8",children:[(0,s.jsx)("h1",{className:"w-full my-2 text-5xl font-bold leading-tight text-center text-primary",children:e.title.split(" ").map((function(e,n){return(0,s.jsxs)("span",{className:n%2?"text-border":"text-primary",children:[e," "]},n)}))}),(0,s.jsx)(D,{}),(0,s.jsxs)("div",{className:"flex flex-wrap",children:[(0,s.jsxs)("div",{className:"w-5/6 sm:w-1/2 p-6 mt-20",children:[(0,s.jsx)("h3",{className:"text-3xl text-gray-800 font-bold leading-none mb-3",children:null===t||void 0===t?void 0:t.title}),(0,s.jsx)("p",{className:"text-gray-600",children:null===t||void 0===t?void 0:t.description})]}),(0,s.jsx)("div",{className:"w-full sm:w-1/2 p-6",children:(0,s.jsx)("img",{className:"h-6/6 rounded-lg",src:null===t||void 0===t?void 0:t.img,alt:null===t||void 0===t?void 0:t.title})})]}),(0,s.jsxs)("div",{className:"flex flex-wrap flex-col-reverse sm:flex-row",children:[(0,s.jsx)("div",{className:"w-full sm:w-1/2 p-6",children:(0,s.jsx)("img",{className:"h-6/6 rounded-lg",src:null===a||void 0===a?void 0:a.img,alt:null===a||void 0===a?void 0:a.title})}),(0,s.jsx)("div",{className:"w-full sm:w-1/2 p-6 mt-20",children:(0,s.jsxs)("div",{className:"align-middle",children:[(0,s.jsx)("h3",{className:"text-3xl text-gray-800 font-bold leading-none mb-3",children:null===a||void 0===a?void 0:a.title}),(0,s.jsx)("p",{className:"text-gray-600 mb-8",children:null===a||void 0===a?void 0:a.description})]})})]})]})})},O=function(){return(0,s.jsxs)("div",{className:"bg-background grid gap-y-16 overflow-hidden",children:[(0,s.jsxs)("div",{className:"relative bg-background",children:[(0,s.jsx)("div",{className:"max-w-7xl mx-auto",children:(0,s.jsxs)("div",{className:"relative z-10 pb-8 bg-background sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32",children:[(0,s.jsx)(k,{}),(0,s.jsx)(M,{})]})}),(0,s.jsx)(S,{})]}),(0,s.jsx)(v,{}),(0,s.jsx)(_,{children:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(T,{}),(0,s.jsx)(v,{})]})}),(0,s.jsx)(_,{children:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(b,{}),(0,s.jsx)(v,{})]})}),(0,s.jsx)(_,{children:(0,s.jsx)(C,{})}),(0,s.jsx)(_,{children:(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(v,{})})}),(0,s.jsx)(c,{})]})}}},function(e){e.O(0,[854,774,888,179],(function(){return n=8312,e(e.s=n);var n}));var n=e.O();_N_E=n}]);
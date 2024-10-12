class CartNotification extends HTMLElement{constructor(){super(),this.notification=document.getElementById("cart-notification"),this.header=document.querySelector("sticky-header"),this.overlay=document.querySelector("[data-cart-notif-overlay]"),this.addonSize=document.querySelector("[data-addons-size]"),this.onBodyClick=this.handleBodyClick.bind(this),this.notification.addEventListener("keyup",evt=>evt.code==="Escape"&&this.close()),this.querySelectorAll('button[type="button"]').forEach(closeButton=>closeButton.addEventListener("click",this.close.bind(this)))}open(){this.notification.classList.add("animate","active"),this.notification.addEventListener("transitionend",()=>{this.notification.focus(),trapFocus(this.notification)},{once:!0}),document.body.addEventListener("click",this.onBodyClick),this.overlay.classList.add("c-navOverlay--visible"),document.body.classList.add("u-noScroll");const size=document.querySelector("[data-notif-size]").dataset.notifSize;size&&this.addonSize&&(this.addonSize.textContent=size);const $header=document.querySelector(".scrolled-past-header");$header&&$header.classList.remove("scrolled-past-header")}close(){this.notification.classList.remove("active"),document.body.removeEventListener("click",this.onBodyClick),removeTrapFocus(this.activeElement),this.overlay.classList.remove("c-navOverlay--visible"),document.body.classList.remove("u-noScroll")}updateTotal(){fetch("/cart.js").then(response=>response.json()).then(data=>{const formatter=new Intl.NumberFormat("en-US",{style:"currency",currency:data.currency}),$cartTotal=document.querySelector("[data-cart-total]"),$progress=document.querySelector("[data-cart-notification-progress]"),rawValue=data.total_price.toString(),rawvalue2=rawValue.slice(0,-2)+"."+rawValue.slice(-2),totalFormatted=formatter.format(rawvalue2),rawTotal=Number(rawValue);if($cartTotal.textContent=totalFormatted,$cartTotal.dataset.cartTotal=rawValue,$progress){const threshold=Number($progress.dataset.cartNotificationProgress);if(rawTotal>=threshold)$progress.style.width="100%";else{var progress=rawTotal/threshold*100;$progress.style.width=`${progress}%`}}})}renderContents(parsedState){this.cartItemKey=parsedState.key,this.getSectionsToRender().forEach(section=>{document.getElementById(section.id).innerHTML=this.getSectionInnerHTML(parsedState.sections[section.id],section.selector)}),this.updateTotal(),this.header&&this.header.reveal(),this.open()}getSectionsToRender(){return[{id:"cart-notification-product",selector:`[id="cart-notification-product-${this.cartItemKey}"]`},{id:"cart-notification-button"},{id:"cart-icon-bubble"}]}getSectionInnerHTML(html,selector=".shopify-section"){return new DOMParser().parseFromString(html,"text/html").querySelector(selector).innerHTML}handleBodyClick(evt){const target=evt.target;if(target!==this.notification&&!target.closest("cart-notification")){const disclosure=target.closest("details-disclosure, header-menu");this.activeElement=disclosure?disclosure.querySelector("summary"):null,this.close()}}setActiveElement(element){this.activeElement=element}}customElements.define("cart-notification",CartNotification);
//# sourceMappingURL=/cdn/shop/t/13/assets/cart-notification.js.map?v=853369368794395731723741493

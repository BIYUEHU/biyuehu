use leptos::prelude::*;
use wasm_bindgen::prelude::*;
mod config;

#[wasm_bindgen]
extern "C" {
    #[wasm_bindgen(js_namespace = particlesJS, js_name = load)]
    fn load(id: &str, path: &str);
}

#[component]
pub fn App() -> impl IntoView {
    // load("particles-js", "particles.json");

    view! {
        <div id="particles-js"></div>
        <div class="bg" style=format!("background-image: url({});", config::background())></div>
        <div class="card">
            <img
                src=config::avatar()
                alt="avatar"
                style="border-radius: 100%;"
                width="200"
                height="200"
            />
            <div style="font-size: 30px; font-weight: bold;">{config::name()}</div>
            <div style="font-size: 19px;">{config::description()}</div>
            <div style="font-size: 21px;">{config::content()}</div>
        <div class="button_group">
        {
        config::button().into_iter().map(|item| {
          view! {
            <a
            href=item.link
            target=if item.blank { "_blank" } else { "_self" }
            class=item.class.unwrap_or("button")
            >
            {item.text}
            </a>
          }
        })
        .collect::<Vec<_>>()}
        </div>
        </div>
    }
}

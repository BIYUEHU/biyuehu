pub fn background() -> &'static str {
    "https://pic.imgdb.cn/item/66da6e98d9c307b7e9bbb840.jpg"
}

pub fn avatar() -> &'static str {
    "https://raw.githubusercontent.com/BIYUEHU/biyuehu.github.io/refs/heads/master/images/avatar.png"
}

pub fn name() -> &'static str {
    "Arimura Sena"
}

pub fn description() -> &'static str {
    "A web and rust developer who loves programming and type theory."
}

pub fn content() -> &'static str {
    "Stacks: Rust TypeScript JavaScript Ocaml Haskell Idris2 PHP Python Lua"
}

#[derive(Clone)]
pub struct ButtonConfig {
    pub text: &'static str,
    pub link: &'static str,
    pub blank: bool,
    pub class: Option<&'static str>,
}

pub fn button() -> Vec<ButtonConfig> {
    vec![
        ButtonConfig {
            text: "GitHub",
            link: "https://github.com/biyuehu",
            blank: true,
            class: Some("button github"),
        },
        ButtonConfig {
            text: "Blog",
            link: "https://hotaru.icu",
            blank: true,
            class: None,
        },
    ]
}

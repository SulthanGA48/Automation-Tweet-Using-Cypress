describe("Mengunjungi Login Page Case", () => {
    it("Mengunjungi Login Page", () => {
        cy.visit("https://taufanfadhilah.github.io/react-gallery");
        cy.title().should("eq", "React Gallery");
        cy.contains("Hello Again")
    });

    it("Memeriksa Email dan Password masukan, & Tombol Login", () => {
        //Memeriksa kolom Email
        const email = cy.get("input[name='email']");
        email.should("be.visible");
        email.should("have.attr", "type", "email");
        email.should("have.attr", "placeholder", "Email Address");

        //Memeriksa Kolom password
        const passw = cy.get("input[type='password']");
        passw.should("be.visible");
        passw.should("have.attr", "type", "password");
        passw.should("have.attr", "placeholder", "Password");

        //memeriksa tombol login
        const tombol = cy.get("button");
        tombol.should("be.visible");
        tombol.contains("Login");
        tombol.should("have.css", "background-color", "rgb(79, 70, 229)");
        tombol.should("have.css", "color", "rgb(255, 255, 255)");
    });
    
    it ("Login dengan Nilai Null", () => {
        const tombol = cy.get("button");
        tombol.click();
        cy.on("window:alert", (text) => {
            expect(text).to.contains("login failed");
        });
    });

    it ("Login dengan menggunakan akun yang salah", () => {
        //Memasukkan email yang salah
        const email = cy.get("input[name='email']");
        email.type("sulthan.awdihansyah@gmail.com");

        //Memasukkan Password  yang salah
        const passw = cy.get("input[name='password']");
        passw.type("passwordsalah");

        //Melakukan klik pada tombol login
        const tombol = cy.get("button");
        tombol.click();

        //Menampilkan notifikasi gagal login
        cy.on("window:alert", (text) => {
            expect(text).to.contains("login failed");
        });
    });

    it("Login dengan menggunakan akun yang benar", () => {
        //Memasukkan email yang benar
        const email = cy.get("input[name='email']");
        email.type("user@react.test");

        //Memasukkan password yang benar
        const passw = cy.get("input[name='password']");
        passw.type("password");

        //Melakukan klik pada tombol login
        const tombol = cy.get("button");
        tombol.click();

        //Menampilkan notifikasi berhasil login
        cy.on("window:alert", (text) => {
            expect(text).to.contains("welcome");
        });

        cy.url().should('eq', 'https://taufanfadhilah.github.io/react-gallery/dashboard');
    });
});
    
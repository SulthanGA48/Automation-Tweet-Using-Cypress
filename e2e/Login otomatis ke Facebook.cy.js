describe('Otomatis login ke website Facebook', () => {
    it('Mengunjungi Website Facebook', () => {
        cy.visit("https://www.facebook.com/")

        const text1 = cy.get("h2[class='_8eso']");
        text1.contains("Facebook helps you connect and share with the people in your life.");
    });

    it('Memasukkan Email & memeriksa attribute pada kolom email', () => {    

      //memeriksa attribute pada kolom email
      const email = cy.get("input[type='text']");
      email.should("be.visible");
      email.should("have.attr", "placeholder", "Email address or phone number");

      //Memasukkan email pada kotak input email
      email.type("sulthanga48@gmail.com");

      });

      it('Memasukkan password & memeriksa attribute pada kolom password', () => {
        
        //memeriksa attribute pada kolom password
        const passw = cy.get("input[type='password']");
        passw.should("be.visible");
        passw.should("have.attr", "placeholder", "Password");
        
        //Memasukkan password pada kolom password
        passw.type("Fb_7a7B7c7D");

      });

      it('Melakukan login dan memeriksa attribut pada tombol Login', () => {
        
        const login = cy.get("button");
        login.should("have.css", "background-color", "rgb(24, 119, 242)");
        login.should("have.css", "color", "rgb(255, 255, 255)");
        login.contains("Log In");
        login.click();
      
      })
  });
  
# 📚 Library Passbook

I like to visit a library in my neighborhood with my son and borrow a few books every two weeks.
One day, one question has occurred to me, how much would it cost if I bought every single book which I borrowed from the library...
So, I created the app which helps me track books with its price like a passbook.
Someday, I'm expecting, it makes my son like reading books and gives us a sense of accomplishment!

![Projects - Library Passbookのコピー](https://github.com/atsumu22/rails-my-library-passbook/assets/112766207/e3952866-f0ed-4391-85d9-548fe124d046)
<br>

We can make the book logs with keywords searching or scanning the barcode.
![Projects - Library Passbookのコピ２ー (1)](https://github.com/atsumu22/rails-my-library-passbook/assets/112766207/5b8822e4-4c5e-40c7-a738-466eb8cea010)

<br>
App home: https://library-passbook.herokuapp.com
   

## Getting Started
### Setup

Install gems
```
bundle install
```
Install JS packages
```
yarn install
```
### DB Setup
```
rails db:create
rails db:migrate
rails db:seed
```

### Run a server and module bundler in another CLI
```
rails s
```
```
./bin/webpacker-dev-server
```

## Built With
- [Rails 7](https://guides.rubyonrails.org/) - Backend / Front-end
- [React](https://react.dev/) - Front-end JS
- [Heroku](https://heroku.com/) - Deployment
- [PostgreSQL](https://www.postgresql.org/) - Database
- [Bootstrap](https://getbootstrap.com/) & [SCSS](https://sass-lang.com/) — Styling
- [Figma](https://www.figma.com) — Prototyping

※used [react-rails gem](https://github.com/reactjs/react-rails) to handle react-component on Rails.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
Rails app generated with [lewagon/rails-templates](https://github.com/lewagon/rails-templates), created by the [Le Wagon coding bootcamp](https://www.lewagon.com) team.

class Car {
  constructor(name, color, speed, Price, Number, ProducedYear, model, isGood) {
    this.name = name;
    this.color = color;
    this.speed = speed;
    this.Number = Number;
    this.ProducedYear = ProducedYear;
    this.model = model;
    this.isGood = isGood;
    this.Price = Price;
    this.id = Date.now();
  }
}


class App {
  constructor() {
    this.users = [];
    this.editingId = null;
    this.userListEl = document.getElementById('userList');
    this.messageEl = document.getElementById('message');
  }

  showMessage(text) {
    this.messageEl.innerText = text;
    this.messageEl.style.display = 'block';
    setTimeout(() => {
      this.messageEl.style.display = 'none';
    }, 3000);
  }

  addCar() {
    const name = document.getElementById('name').value.trim();
    const color = document.getElementById('color').value.trim();
    const Number = document.getElementById('Number').value;
    const speed = document.getElementById('speed').value.trim();
    const ProducedYear = document.getElementById('ProducedYear').value;
    const model = document.getElementById('model').value.trim();
    const isGood = document.getElementById('isGood').value;
    const Price = document.getElementById('price').value;

    if (!name || !color || !Number || !speed || !ProducedYear || !model || !isGood || !Price)  {
      alert("Please fill all fields!");
      return;
    }

    let user = new Car(name, color, Number, speed,ProducedYear, model, isGood);
      

    if (this.editingId) {
      const index = this.users.findIndex(u => u.id === this.editingId);
      this.users[index] = { ...user, id: this.editingId };
      this.showMessage(`${user.model} updated successfully!`);
      this.editingId = null;
    } else {
      this.users.push(user);
      this.showMessage(`${user.model} added successfully!`);
    }

    this.clearForm();
    this.render();
  }

  deleteCar(id) {
    const user = this.users.find(u => u.id === id);
    this.users = this.users.filter(user => user.id !== id);
    this.showMessage(`${user.model} deleted!`);
    this.render();
  }

  editCar(id) {
    const user = this.users.find(u => u.id === id);
    const name = document.getElementById('name').value.Trim();
    const color = document.getElementById('color').value.trim();
    const Number = document.getElementById('Number').value;
    const speed = document.getElementById('speed').value;
    const ProducedYear = document.getElementById('ProducedYear').value;
    const model = document.getElementById('model').value.Trim();
    const isGood = document.getElementById('isGood').value;
    const Price = document.getElementById('price').value;
    this.editingId = id;
  }

  clearForm() {
    document.getElementById('name').value = '';
    document.getElementById('color').value = '';
    document.getElementById('Number').value = '';
    document.getElementById('speed').value = '';
    document.getElementById('ProdecedYear').value = '';
    document.getElementById('model').value = '';
    document.getElementById('isGood').value = '';
    document.getElementById('price').value = '';
  }

  render(filterModel = null) {
  this.userListEl.innerHTML = '';

  let listToShow = this.users; 
  if (filterModel) {
    listToShow = this.users.filter(u => u.model === filterModel);
  }

  if (listToShow.length === 0) {
    this.userListEl.innerHTML = `<p class='text-center text-muted'>No ${filterModel ?? 'cars'} found.</p>`;
    return;
  }

  listToShow.forEach(car => {
    const div = document.createElement('div');
    div.innerHTML = `
      <div class="card mb-3 shadow-sm">
        <div class="card-body">
          <h5 class="card-title">${car.model} (${car.year})</h5>
          <p class="card-text">
            🏷️ Brand: ${car.model}<br>
            💰 Price: $${car.price}<br>
            ⚙️ Engine: ${car.speed}
          </p>
          <div class="d-flex gap-2">
            <button class="btn btn-warning btn-sm" onclick="app.editUser(${car.id})">Edit</button>
            <button class="btn btn-danger btn-sm" onclick="app.deleteUser(${car.id})">Delete</button>
          </div>
        </div>
      </div>
    `;
    this.userListEl.appendChild(div);
  });
}

}

const app = new App();

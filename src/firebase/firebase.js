import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/firebase-firestore'

const config = {
	apiKey: "AIzaSyDApqVQBJXYtWCDXZ2z9kT4Q7X_0KgmjDU",
	authDomain: "doar-te.firebaseapp.com",
	databaseURL: "https://doar-te.firebaseio.com",
	projectId: "doar-te",
	storageBucket: "doar-te.appspot.com",
  messagingSenderId: "365747247886",
  appId: "1:365747247886:web:bd98dbea3edd54a9a8555f"
}

class Firebase {
	constructor() {
		app.initializeApp(config)
		this.auth = app.auth()
		this.db = app.firestore()
	}

	login(email, password) {
		return this.auth.signInWithEmailAndPassword(email, password)
	}

	logout() {
		return this.auth.signOut()
	}

	async register(name, email, password, cpf) {
		await this.auth.createUserWithEmailAndPassword(email, password)
		return this.auth.currentUser.updateProfile({
			displayName: name,
			displayCPF: cpf,
		})
	}
	
	addData(type, shirt, pants, blood, medula, toys, books, food, hygiene ) {
		if(!this.auth.currentUser) {
			return alert('Not authorized')
		};

		if(shirt) {
			this.db.doc(`shirt/${this.auth.currentUser.uid}`).set({
			name: this.auth.currentUser.displayName,
			email: this.auth.currentUser.email,
		})};

		if(pants) {
			this.db.doc(`pants/${this.auth.currentUser.uid}`).set({
			name: this.auth.currentUser.displayName,
			email: this.auth.currentUser.email,
		})};

		if(blood){
			this.db.doc(`blood/${this.auth.currentUser.uid}`).set({
			name: this.auth.currentUser.displayName,
			email: this.auth.currentUser.email,
		})};

		if(medula){
			this.db.doc(`medula/${this.auth.currentUser.uid}`).set({
			name: this.auth.currentUser.displayName,
			email: this.auth.currentUser.email,
		})};

		if(toys){
			this.db.doc(`toys/${this.auth.currentUser.uid}`).set({
			name: this.auth.currentUser.displayName,
			email: this.auth.currentUser.email,
		})};
		
		if(books){
			this.db.doc(`books/${this.auth.currentUser.uid}`).set({
			name: this.auth.currentUser.displayName,
			email: this.auth.currentUser.email,
		})};

		if(food){
			this.db.doc(`food/${this.auth.currentUser.uid}`).set({
			name: this.auth.currentUser.displayName,
			email: this.auth.currentUser.email,
		})};
		
		if(hygiene){
			this.db.doc(`hygiene/${this.auth.currentUser.uid}`).set({
			name: this.auth.currentUser.displayName,
			email: this.auth.currentUser.email,
		})};

		return this.db.doc(`users/${this.auth.currentUser.uid}`).set({
			type
		})
	}

	addDataReceiver(reShirt, rePants, reBlood, reMedula, reToys, reBooks, reFood, reHygiene ) {
		if(!this.auth.currentUser) {
			return alert('Not authorized')
		};

		if(reShirt) {
			this.db.doc(`reShirt/${this.auth.currentUser.uid}`).set({
			name: this.auth.currentUser.displayName,
			email: this.auth.currentUser.email,
		})};

		if(rePants) {
			this.db.doc(`rePants/${this.auth.currentUser.uid}`).set({
			name: this.auth.currentUser.displayName,
			email: this.auth.currentUser.email,
		})};

		if(reBlood){
			this.db.doc(`reBlood/${this.auth.currentUser.uid}`).set({
			name: this.auth.currentUser.displayName,
			email: this.auth.currentUser.email,
		})};

		if(reMedula){
			this.db.doc(`reMedula/${this.auth.currentUser.uid}`).set({
			name: this.auth.currentUser.displayName,
			email: this.auth.currentUser.email,
		})};

		if(reToys){
			this.db.doc(`reToys/${this.auth.currentUser.uid}`).set({
			name: this.auth.currentUser.displayName,
			email: this.auth.currentUser.email,
		})};
		
		if(reBooks){
			this.db.doc(`reBooks/${this.auth.currentUser.uid}`).set({
			name: this.auth.currentUser.displayName,
			email: this.auth.currentUser.email,
		})};

		if(reFood){
			this.db.doc(`reFood/${this.auth.currentUser.uid}`).set({
			name: this.auth.currentUser.displayName,
			email: this.auth.currentUser.email,
		})};
		
		if(reHygiene){
			this.db.doc(`reHygiene/${this.auth.currentUser.uid}`).set({
			name: this.auth.currentUser.displayName,
			email: this.auth.currentUser.email,
		})};
	}



	isInitialized() {
		return new Promise(resolve => {
			this.auth.onAuthStateChanged(resolve)
		})
	}

	getCurrentUsername() {
		return this.auth.currentUser && this.auth.currentUser.displayName
	}

	getCurrentUseremail() {
		return this.auth.currentUser && this.auth.currentUser.email
	}
	

	async getCurrentUserType() {
		if(this.auth.currentUser){
			const type = await this.db.doc(`users/${this.auth.currentUser.uid}`).get()
			return type.get('type')
		}
	}
}

export default new Firebase()
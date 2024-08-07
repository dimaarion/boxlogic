import Loki from "lokijs";

export default class Database {
    db;
    sound = {
        music: 0.5,
        effect: 0.5,
        pause: false
    }
    level = {
        level:1,
        grasses:0
    }

    options = {
        level:[{
            id:1,
            count:1,
            grasses: 0
        }]
    }

constructor() {
        this.create();
}


    create() {
        this.db = new Loki("boxes", {
            autosave: true, //setting to save
            autosaveInterval: 1000
        });

        this.db.loadDatabase({}, () => {
            if (!this.db.getCollection("sound")) {
                 this.db.addCollection("sound");
            }
            if (!this.db.getCollection("level")) {
                this.db.addCollection("level");
            }

        });
        if(!this.db.addCollection("sound").findOne({"$loki": 1})){
            this.db.addCollection("sound").insert(this.sound)
        }
        if(!this.db.addCollection("level").findOne({"$loki": 1})){
            this.db.addCollection("level").insert(this.level)
        }
        if(!this.db.addCollection("level").findOne({"$loki": 2})){
            this.db.addCollection("level").insert(this.options)
        }
        return this.db;
    }

    set(fn,nameCollection,row = 1){
        this.db.addCollection(nameCollection).chain().find({"$loki": row}).update(fn);
        this.db.saveDatabase();
    }

    get(nameCollection,row = 1){
      return  this.db.getCollection(nameCollection).findOne({"$loki":row})
    }

    remove(nameCollection){
        this.db.removeCollection(nameCollection);
        this.db.saveDatabase();
    }





}
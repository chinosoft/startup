let Social = {
  shared(friendName){
    return friendName + " Shared " + this.name;
},
  like(friendName){
    return friendName + "Like " + this.name;
  }
}
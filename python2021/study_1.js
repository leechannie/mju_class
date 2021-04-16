var relationship1 = {
    name: 'zero',
    friends: ['nero', 'hero', 'xero'],
    logFriends: function () {
      var that = this; // relationship1을 가리키는 this를 that에 저장
      console.log("기존 function()")
      this.friends.forEach(function (friend) {
        console.log(that.name, friend);
      });
    },
  };
  relationship1.logFriends();
  
  const relationship2 = {
    name: 'zero',
    friends: ['nero', 'hero', 'xero'],
    logFriends() {
      console.log("화살표 함수")
      this.friends.forEach(friend => {
        console.log(this.name, friend);
      });
    },
  };
  relationship2.logFriends();
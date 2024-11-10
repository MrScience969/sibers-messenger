
export type Message = {
    id: number;
    favorite: boolean;
    avatar: string;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
    address: UserAddress;
    company: Company;
    posts: Post[];
    accountHistory: AccountHistory[];
  }

export type UserAddress = {
        streetA: string;
        streetB: string;
        streetC: string;
        streetD: string;
        city: string;
        state: string;
        country: string;
        zipcode: string;
        geo: {
          lat: string;
          lng: string;
        }
  }

export type Company = {
    name: string;
    catchPhrase: string;
    bs: string;
  }

export type Post = {
      words: string[];
      sentence: string;
      sentences: string;
      paragraph: string;
    }

export type AccountHistory = {
    amount: string;
    date: string;
    business: string;
    name: string;
    type: string;
    account: string;
}

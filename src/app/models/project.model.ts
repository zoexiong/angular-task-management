export class Task {
  id: number;
  title: string;
  desc: string;
  status: string;
}

class Member {
  //id: number;
  name: string;
  tasks: Task[];
}

export class Project {
  id: number;
  title: string;
  desc: string;
  members: Member[];
}

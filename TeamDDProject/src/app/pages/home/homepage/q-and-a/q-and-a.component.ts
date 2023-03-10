import { Component, EventEmitter, Output } from '@angular/core';
import { Question } from 'src/app/services/interface/question';

@Component({
  selector: 'app-q-and-a',
  templateUrl: './q-and-a.component.html',
  styleUrls: ['./q-and-a.component.scss'],
})
export class QAndAComponent {
  @Output() onChangeState: EventEmitter<Question> = new EventEmitter();
  qnas: Question[] = [
    {
      id: '1',
      question: 'What is Netflix?',
      answer:
        "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices. You can watch as much as you want, whenever you want all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!",
    },
    {
      id: '2',
      question: 'How much does Netflix cost?',
      answer:
        'Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from $6.99 to $19.99 a month. No extra costs, no contracts.',
    },
    {
      id: '3',
      question: "What's different on an ad-supported plan?",
      answer:
        'An ad-supported plan is a great way to enjoy movies and TV shows at a lower price. You can stream your favorites with limited ad breaks (some location and device restrictions apply). Downloads are not supported and a limited number of movies and TV shows are not available due to licensing restrictions.',
    },
    {
      id: '4',
      question: 'Where can I watch?',
      answer:
        "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.",
    },
    {
      id: '5',
      question: 'How do I cancel?',
      answer:
        'Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.',
    },
    {
      id: '6',
      question: 'What can I watch on Netflix?',
      answer:
        'Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.',
    },
    {
      id: '7',
      question: 'Is Netflix good for kids?',
      answer:
        'The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space. Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.',
    },
  ];

  activeQnAId: string = '';

  changeState(qna: Question) {
    this.activeQnAId = this.activeQnAId == qna.id ? '' : qna.id;
  }
}

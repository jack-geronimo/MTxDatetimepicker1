import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { marked } from 'marked';

@Injectable({
  providedIn: 'root'
})
export class ChangelogService {

  private readonly changelogUrl = 'http://localhost:3000/changelog/';

  constructor(private readonly http: HttpClient) { }

  getChangelog(): Observable<string> {
    return this.http.get(this.changelogUrl, { responseType: 'text' }).pipe(
      map(markdown => marked(markdown) as string)
    );
  }
}

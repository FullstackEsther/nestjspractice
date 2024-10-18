import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { FeedPostEntity } from '../models/post.entity';
import { FeedPost } from '../models/post.interface';
import { from, Observable } from 'rxjs';

@Injectable()
export class FeedService {
    constructor(
        @InjectRepository(FeedPostEntity)
        private readonly FeedPostRepository: Repository<FeedPostEntity>
    ) { }


    createPost(feedPost: FeedPost): Observable<FeedPost> {
        return from(this.FeedPostRepository.save(feedPost));
    }
}

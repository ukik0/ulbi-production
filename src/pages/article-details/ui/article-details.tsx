import { memo } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { ArticleDetails } from '@/entities/article';
import { CommentList } from '@/entities/comment';
import { fetchComments } from '@/pages/article-details/model/actions/fetch-comments/fetch-comments';
import {
    ArticleDetailsCommentReducer,
    getArticleComments,
} from '@/pages/article-details/model/slice/article-details-comment-slice';
import { DynamicModuleLoader, Reducers } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { clsx } from '@/shared/lib/helprers/classnames/classNames';
import { useAppDispatch, useInitialEffect } from '@/shared/lib/hooks';
import { Typography } from '@/shared/ui/Typography';

import * as model from '../model/selectors';

import cl from './article-details.module.scss';

interface ArticleDetailsProps {
    className?: string
}

const INITIAL_REDUCER: Reducers = {
    comments: ArticleDetailsCommentReducer,
};

const ArticleDetailsPage = ({ className }: ArticleDetailsProps) => {
    const { id } = useParams<{id: string}>();

    const dispatch = useAppDispatch();

    const comments = useSelector(getArticleComments.selectAll);
    const isLoading = useSelector(model.getArticleCommentIsLoading);
    const error = useSelector(model.getArticleCommentError);

    useInitialEffect(() => {
        dispatch(fetchComments(id));
    });

    if (!id) return <Empty />;

    return (
        <DynamicModuleLoader reducers={INITIAL_REDUCER} removeAfterUnmount>
            <div className={clsx({ cls: cl.ArticleDetails, additional: [className] })}>
                <ArticleDetails id={id} />
                <Typography variant="title-2">
                    Комментарии
                </Typography>
                <CommentList isLoading={isLoading} comments={comments} />
            </div>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);

function Empty() {
    return (
        <div className={clsx({ cls: cl.ArticleDetails })}>
            Статья отсутствует
        </div>
    );
}

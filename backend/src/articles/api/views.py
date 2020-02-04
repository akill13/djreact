
from rest_framework import viewsets
from articles.models import Article
from .serializer import ArticleSerializer


class ArticleViewSet(viewsets.ModelViewSet):
    serializer_class = ArticleSerializer
    queryset = Article.objects.all()

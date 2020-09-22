import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: 'https://hasura.io/learn/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik9FWTJSVGM1UlVOR05qSXhSRUV5TURJNFFUWXdNekZETWtReU1EQXdSVUV4UVVRM05EazFNQSJ9.eyJodHRwczovL2hhc3VyYS5pby9qd3QvY2xhaW1zIjp7IngtaGFzdXJhLWRlZmF1bHQtcm9sZSI6InVzZXIiLCJ4LWhhc3VyYS1hbGxvd2VkLXJvbGVzIjpbInVzZXIiXSwieC1oYXN1cmEtdXNlci1pZCI6ImF1dGgwfDVmNjljN2Q1ZTE1ZmQ3MDA2ZjI4NDA3ZCJ9LCJuaWNrbmFtZSI6ImV1Z2VuZSIsIm5hbWUiOiJldWdlbmVAdGhlbGVhbmFwcHMuY29tIiwicGljdHVyZSI6Imh0dHBzOi8vcy5ncmF2YXRhci5jb20vYXZhdGFyLzIzNGIwM2NlNjNiM2EwYTRhMGVlNjIwYjRkNjAzNGJkP3M9NDgwJnI9cGcmZD1odHRwcyUzQSUyRiUyRmNkbi5hdXRoMC5jb20lMkZhdmF0YXJzJTJGZXUucG5nIiwidXBkYXRlZF9hdCI6IjIwMjAtMDktMjJUMDk6NDU6NTguNDEwWiIsImlzcyI6Imh0dHBzOi8vZ3JhcGhxbC10dXRvcmlhbHMuYXV0aDAuY29tLyIsInN1YiI6ImF1dGgwfDVmNjljN2Q1ZTE1ZmQ3MDA2ZjI4NDA3ZCIsImF1ZCI6IlAzOHFuRm8xbEZBUUpyemt1bi0td0V6cWxqVk5HY1dXIiwiaWF0IjoxNjAwNzY3OTU5LCJleHAiOjE2MDA4MDM5NTksImF0X2hhc2giOiJsYUJqUFNTQ1pKWDAxRXN5c3l6eTlBIiwibm9uY2UiOiJucnF3SUJIdWgzSkRud0R1STZBaDlxMUtWdEFTUm1PRSJ9.YBJj3lzA7IPJUInHXvvqsX-K_qCPPUU8NlnyIUonm5fZgoVBQd1kXs_XJfSa-2a7Nhf9eR7-ek50caw_s8jvfpXWLA3LAKPLXpJmTvvklh9dv4WQMIZZwvjDdaSiZAMoa7A28kZqhA84kRi5P3WPYAT5kKHAUE0TbkwBT7gW-f3vyR-Z-AhobUFmkXuFbE3hgu9hAhJJDQm3KPncmc13fp9N7_v8U9nWFlvJfAlLPZZyTrqZUavpMCpFAyAvWzqQvVYCI9F8d8PjffRDvOejUGCnGw5BWupCM0cuaF6CmmTOaJ6alcfd-LVDCN6wc7vGzG8iD04r6oaH9rrgTGybRg';
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

export default apolloClient;
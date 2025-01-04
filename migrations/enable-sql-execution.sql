-- Enable pg_net extension for HTTP requests
    create extension if not exists pg_net with schema extensions;

    -- Create execute_sql function
    create or replace function public.execute_sql(query text)
    returns void as $$
    begin
      execute query;
    exception when others then
      raise notice 'Error executing query: %', sqlerrm;
      raise;
    end;
    $$ language plpgsql security definer;

    -- Grant permissions
    grant execute on function public.execute_sql(text) to postgres, anon, authenticated, service_role;

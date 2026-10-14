begin;

alter table public.productos enable row level security;
alter table public.categorias enable row level security;

-- El catálogo no expone cantidades ni permite modificar los datos.
revoke all privileges on table public.productos from anon;
revoke all privileges on table public.categorias from anon;
grant usage on schema public to anon;
grant select (
  codigo, nombre, categoria, precio_unitario, descripcion, tamano, color,
  alto_cm, diametro_cm, ancho_cm, profundidad_cm, base_cm,
  imagen_principal, activo
) on public.productos to anon;
grant select (codigo, nombre) on public.categorias to anon;

drop policy if exists catalogo_productos_activos on public.productos;
create policy catalogo_productos_activos on public.productos
  for select to anon using (activo = true);

drop policy if exists catalogo_categorias on public.categorias;
create policy catalogo_categorias on public.categorias
  for select to anon using (true);

commit; 
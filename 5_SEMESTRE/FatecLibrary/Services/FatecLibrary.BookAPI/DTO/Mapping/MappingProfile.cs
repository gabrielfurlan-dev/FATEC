using AutoMapper;
using FatecLibrary.BookAPI.Models.Entities;
using FatecLibrary.BookAPI.DTO.Enities;

namespace FatecLibrary.BookAPI.DTO.Mapping
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Publishing, PublishingDTO>().ReverseMap();
            CreateMap<BookDTO, Book>();
            CreateMap<Book, BookDTO>().ForMember(
                p => p.PublishingName,
                options => options.MapFrom(src => src.Publishing.Name)
            );
        }
    }
}